import React, { useReducer, useContext, createContext } from 'react';


const CartStateContext = createContext();

export const initState= {
    basket: (localStorage.length > 0 ? (JSON.parse(localStorage.getItem('cartItems'))) : [])
}

export const subtotalQtt = (basket) =>basket?.reduce((acc, item) =>acc + item.numItems,0)
export const subtotalPrice = (basket) =>basket?.reduce((acc, item) => acc + item.item.price * item.numItems,0).toFixed(2)



export const reducerCart=(state, action)=>{
    const item = action.payload;
    switch (action.type){
        case "ADD":
            {
            console.log(state.basket, "state is here")
            const foundItem = state.basket.find(el=> el.item.id === item.item.id)
            console.log(item.item.id,"id")
            console.log(foundItem, "itemfound")
            if(foundItem){
                return{
                    ...state
                }
            }else{
                return{
                    ...state, basket: [...state.basket, item]
                }  
            }
        }

            case "REMOVE":
                let newBasket = [...state.basket]
                console.log(newBasket, "newBasket---------")
                const indexFound = state.basket.findIndex((basketItem) => basketItem.item.id === item.id)
                console.log(indexFound, "indeqqqqqqqqqqqqq")
                if(indexFound >= 0){
                    newBasket.splice(indexFound, 1)
                }
                return{
                    ...state, basket: newBasket

                }

            case "QUANTITY_CHANGE":
                let copyBasket = [...state.basket]
                const existItem = state.basket.find(el => el.item.id === item.id)
                console.log(existItem, "exist", '\n STATe: ', state.basket)
                if(existItem)
                    copyBasket[copyBasket.indexOf(existItem)].numItems = Number(item.val)
                return {
                    ...state, basket:copyBasket
                }
                
            case "CLEAN_BASKET":
                return{
                    ...state, basket:[]
                }
            case "SET_TOLOCALQTT":
                    localStorage.setItem('cartItems', JSON.stringify(state.basket))

            
            case "SET_TO_LOCAL_ADDCART":
                    localStorage.setItem('cartItems', JSON.stringify(state.basket))

            case "REMOVE_BUTTON":
                localStorage.setItem('cartItems', JSON.stringify(state.basket))

            default:
                return state;
    }
}



export const CartProvider = (({children,reducerCart, initState}) =>
    <CartStateContext.Provider value = {useReducer(reducerCart, initState)}>
        {children}
    </CartStateContext.Provider>
)


export const useCart = () => useContext(CartStateContext);
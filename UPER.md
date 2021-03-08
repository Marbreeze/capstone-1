<h1>The Problem Solving Framework : 'UPER'</h1>

* U = "Understand"
* P = "Plan"
* E = "Execute"
* R = "Reflect" / "Refactor"

<h2>1. Understanding the Problem</h2>
* The project requirments are to create a fully functional ecomerce website.The navigation should have minimum to pages between Shopping screen and Cart screen.
* When user is at the Home Screen, functionality shoud be simple and design clean. The products should be displayed from a JSON file, there should be more then 10 products that each have "name, serial number, id, tags, price". 
* The user shoud be able to add product to the cart from Home Page and see the product Detail.
* The cart should update whenever user removes or adds something to Cart.
* The quantity of the product should update whenever user adds or removes quantity.
* The quantity as well needs to update in stok products. So the next user can choose necessary qty apropriately.
* Payment on picked items for checkout shoud be incorporated.
*
<h2>
    2. Planning the Solution
</h2>
* For my Capstone I decided to bring a piece of Moldova to american buyers. Moldova wine is one of the topest wine in the world, also very cheap.
* For the design of Capstone the best aproach that is easy and makes the code cleaner would be React-Boostrap.
* For navigating from one view to another I have used React-Router. For payment integration I used Stripe.
* Each page must have a clear and profesional interface. 
* First a header and footer must be implemented, then the displaying off all products.
* Each product should have 2 buttons that allow user to add and see product detail, which is different view. On product detail page user can add to the cart as well. 
* When usser presses the Cart Navigation, it will bring him to another page, in where all items picked are stored. User can add, remove from basket, pick quantity. After deciding what needs to be adjusted, user can move forward to payment page by clicking "Prooceed to Payment Btn".
* At this point user is at the last view wich is payment proceesing, user can see a form in where, personal information is required to move forward, as well as a bank account. After filling all the requirments, user pays, a window pops up that informs the user about the payment. Then user is redirected to Home Page.

<h2>
    3. Executing the Plan
</h2>
* The plan was executed staring from Home Page, (Search Bar- functionality), add to basket and view detail functionality, moving on to Detail Page.
* After everything was working I moved to Checkout in where I solved the quantity functionality and removing the item, calculating the price, in regards to items price and quantity, as well as storing it in localStorage.
* When these components and views were done I have moved to payment processing where I implemented stripe first, then I created a user Information form. Form  displays items that were choosen, quantity and price, if user wishes to modify he is redirected to apropriate pages to do so! After clicking submit payment, user is redirected to home page.

<h2>
    4. Reflection / Refactor
</h2>
* There is so much still to implement in this project, I learned and improved a lot, doing everything from scratch. I could do payment integration where user receives an actual receipt on email, also user can make returns. On styling work can be done as well. I would love to implement a strong visual connection with user, in where user can interact more with website and have fun with it.

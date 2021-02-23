import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
import {useCart} from '../Components/CartGlobalState';
import {useState} from 'react';
import {Form, Card,Button, Row, Col} from 'react-bootstrap';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

const MyCheckoutForm = ({history}) => {
  const [{basket}, dispatch] = useCart();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [boolSubmit, setBoolSubmit] = useState(false);
  const [postalCode, setPostalCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState('');
  const stripeHook = useStripe();
  const elements = useElements();

  const updateStock = () => {
    basket.map((item)=>item.item.quantity -= item.numItems);
    setBoolSubmit(true)
  }

  const handleSubmit = async (event) => {

    updateStock()
    event.preventDefault();
    
    if (!stripeHook || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);
    validateEmail(email)
    const {error, paymentMethod} = await stripeHook.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details:{
        name:"Stratu Marina",
        address: "794 Mcallister St San Francisco California(CA) 94102"
      }
  })
    if(error){
      console.log(error.message)
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      localStorage.clear();
      alert("Order has been submitted")
      history.push("/wines")
      dispatch({
        type:"CLEAN_BASKET"
      })
    }
  }


const validateEmail=(email)=>{
  if(email) {
    console.log(email, "email")
     const regex = new RegExp(email);
     const emailValid = regex.test(email);
     console.log(emailValid, "validation")
      if(!email || (emailValid.test === false)){
        setEmail("Invalid email")
        return false
      }
      return true
  }
}


return (
    <Row  className='justify-content-md-left'>
      <Col xs = {12} md = {6}>
      <form onSubmit={handleSubmit} style ={{width:'400px' }}>
      <Col className = "pl-5"><h4>Shipping Information</h4></Col>

      <Form.Group >
          <Form.Label>First Last Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='First & Last Name'
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group >
          <Form.Label>Address</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter address'
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group >
          <Form.Label>City</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter city'
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group >
          <Form.Label>Postal  Code</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter postal code'
            value={postalCode}
            required
            onChange={(e) => setPostalCode(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group >
          <Form.Label>Email  </Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter email Adress'
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group >
          <Form.Label>Phone number  </Form.Label>
          <PhoneInput
            country="US"
            placeholder='Enter phone number'
            value={phoneNumber}
            required
            onChange={setPhoneNumber}
          />
        </Form.Group>
          <Card>
            <Card.Body>
              <CardElement/>
            </Card.Body>
        </Card>
        <Button
          type = "submit"
          variant="dark"
          block disabled = {!stripeHook || !name || !address || !postalCode || !city}
        >Submit Your  Order 
    </Button>
    </form>  
    </Col>
  </Row>
  );
}
export default MyCheckoutForm

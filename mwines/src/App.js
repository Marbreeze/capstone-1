import './App.css';
import Header from './Components/Header';
import {Container} from 'react-bootstrap';
import Home from './Views/Home';
import WineDetail from './Views/WineDetail';
import Checkout from './Views/Checkout';
import Footer from './Components/Footer';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import StripeCheckoutPage from './Views/StripeCheckoutPage';


function App() {
  return (
    <div>
      <Router>
      <Header/>
      <main className = "py-3">
      <Container>
        <Route exact path = "/" component={Home}/>
        <Route exact path = "/wines" component={Home}/>
        <Route exact path = "/search/:searchterm" component={Home}/>
        <Route exact path = "/productdetail/:id" component={WineDetail}/>
        <Route exact path = "/cart" component={Checkout}/>
        <Route exact path = "/payment&shipping" component={StripeCheckoutPage}/>
      </Container>
      </main>
    <Footer/>
    </Router>
    </div>
  );
}

export default App;

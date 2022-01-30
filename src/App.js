import { createContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import { AuthContextProvider } from './components/Login/useAuth';
import Notfound from './components/Notfound/Notfound';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Review from './components/Review/Review';
import Shop from './components/shop/Shop';
import Shipment from './components/Shipment/Shipment';
import {PrivateRoute} from './components/Login/useAuth';
export const UserContext = createContext();
function App(props) {
  const user = { name: 'LoggedUser', email: 'Logged@User.com' };
  return (
    <div>
      <AuthContextProvider>
        <Header></Header>
        <Router>
          <Switch>
            <Route path="/shop">
              <Shop></Shop>
            </Route>
            <Route path="/review">
              <Review></Review>
            </Route>
            <Route path="/inventory">
              <Inventory></Inventory>
            </Route>

            <Route exact path="/">
              <Shop></Shop>
            </Route>
            <Route path="/product/:productKey">
              <ProductDetails></ProductDetails>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/shipment">
              <Shipment></Shipment>
            </PrivateRoute>
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import NotFound from "./components/NotFound/NotFound";
import Services from "./components/Services/Services";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Header from "./components/shared/Header/Header";
import Footer from "./components/shared/Footer/Footer";
import AuthProvider from "./components/context/AuthProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ContactUs from "./components/ContactUs/ContactUs";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/services">
              <Services></Services>
            </Route>
            <Route path="/contactus">
              <ContactUs></ContactUs>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/services/placeOrder/:id">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

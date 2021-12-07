import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import CartPage from './Components/CartPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomeComponent from './Components/HomeComponent';
import ProductpgS20 from './Components/ProductPage/ProductpgS20';
import ProductIphone11promax from './Components/ProductPage/ProductIphone11promax';
import Nokia3320 from './Components/ProductPage/Nokia3320';
import SamsungNote20Ultra from './Components/ProductPage/SamsungNote20Ultra';
import SnakeRing from './Components/ProductPage/SnakeRing';
import SweatShirt from './Components/ProductPage/SweatShirt';
import UlyssenWatch from './Components/ProductPage/UlyssenWatch';
import NikeShoes from './Components/ProductPage/NikeShoes';
import MacBookAir2017 from './Components/ProductPage/MacBookAir2017';
import XiaomiMiScooter from './Components/ProductPage/XiaomiMiScooter';
import LenovoThinkPad from './Components/ProductPage/LenovoThinkPad';
import IPhone11black from './Components/ProductPage/IPhone11black';
import CartProviderBeautyHealth from './Components/Beauty&HealthCategory/CartProviderBeautyHealth';
import CartProviderElectronics from './Components/Electronics/CartProviderElectronics';
import CartProviderFurnitures from './Components/Furnitures/CartProviderFurnitures';
import CartProviderHomeGarden from './Components/HomeGarden/CartProviderHomeGarden';
import CartProviderLuggage from './Components/LuggageAndBags/CartProviderLuggage';
import CartProviderShoes from './Components/Shoes/CartProviderShoes';
import CartProviderSports from './Components/SportsAndEntertainment/CartProviderSports';
import CartProviderAllProducts from './Components/AllCategories/CartProviderAllProducts';
import CartProviderPhone from './Components/PhoneCategory/CartProviderPhone';
import CartProviderBaby from './Components/BabyProductCategory/CartProviderBaby';
import SignUp from './Components/SignUp';
import BabyCart from './Components/ProductPage/BabyCart';
import NikeSport from './Components/ProductPage/NikeSport';
import Multivitaminico from './Components/ProductPage/Multivitaminico';
import SingleSofa from './Components/ProductPage/SingleSofa';
import Cortacesped from './Components/ProductPage/Cortacesped';
import TravelBag from './Components/ProductPage/TravelBag';
import Paletin from './Components/ProductPage/Paletin';
 
function App() {
  return (
    <Router>

      <NavBar />
      <Switch>
        <Route exact path="/" component={HomeComponent} />
        <Route exact path="/S20" component={ProductpgS20} />
        <Route exact path="/Iphone11pmax" component={ProductIphone11promax} />
        <Route exact path="/nokia3320" component={Nokia3320} />
        <Route exact path="/SamsungNote20" component={SamsungNote20Ultra} />
        <Route exact path="/SnakeRing" component={SnakeRing} />
        <Route exact path="/SweatShirt" component={SweatShirt} />
        <Route exact path="/UlyssenWatch" component={UlyssenWatch} />
        <Route exact path="/Nike" component={NikeShoes} />
        <Route exact path="/MacBookAir" component={MacBookAir2017} />
        <Route exact path="/XiaomiScooter" component={XiaomiMiScooter} />
        <Route exact path="/Lenovo" component={LenovoThinkPad} />
        <Route exact path="/Iphone11" component={IPhone11black} />
        <Route exact path="/technology" component={CartProviderPhone} />
        <Route exact path="/BabyProducts" component={CartProviderBaby} />
        <Route exact path="/Beauty&Health" component={CartProviderBeautyHealth} />
        <Route exact path="/Electronics" component={CartProviderElectronics} />
        <Route exact path="/Furnitures" component={CartProviderFurnitures} />
        <Route exact path="/Home&Garden" component={CartProviderHomeGarden} />
        <Route exact path="/Luggage&Bags" component={CartProviderLuggage} />
        <Route exact path="/Shoes" component={CartProviderShoes} />
        <Route exact path="/Sports&Entertainment" component={CartProviderSports} />
        <Route exact path="/AllCategories" component={CartProviderAllProducts} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/cart" component={CartPage} />
        <Route exact path="/babyCart" component={BabyCart} />
        <Route exact path="/nikeSport" component={NikeSport} />
        <Route exact path="/multivitaminico" component={Multivitaminico} />
        <Route exact path="/singlesofa" component={SingleSofa} />
        <Route exact path="/Cortacesped" component={Cortacesped} />
        <Route exact path="/travelBag" component={TravelBag} />
        <Route exact path="/paletin" component={Paletin} />

      </Switch>
      <Footer />

    </Router>





  );
}

export default App;

import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Components/NavBar';
import Carousel from './Components/Carousel'
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
import SignUpPage from './Components/SignUpPage';
import BeautyProduct_Render from './Components/Beauty&HealthCategory/BeautyProduct_Render';
import ElectronicsProduct_Render from './Components/Electronics/ElectronicsProduct_Render';
import FurnituresProduct_Render from './Components/Furnitures/FurnituresProduct_Render';
import HomeGardenProduct_Render from './Components/HomeGarden/HomeGardenProduct_Render';
import LuggageAndBags_Render from './Components/LuggageAndBags/LuggageAndBags_Render';
import ShoesRender from './Components/Shoes/ShoesRender';
import SportsProduct_Render from './Components/SportsAndEntertainment/SportsProduct_Render';
import AllRender from './Components/AllCategories/AllRender';
import CartProviderPhone from './Components/PhoneCategory/CartProviderPhone';
import CartProviderBaby from './Components/BabyProductCategory/CartProviderBaby';

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
        <Route exact path="/Beauty&Health" component={BeautyProduct_Render} />
        <Route exact path="/Electronics" component={ElectronicsProduct_Render} />
        <Route exact path="/Furnitures" component={FurnituresProduct_Render} />
        <Route exact path="/Home&Garden" component={HomeGardenProduct_Render} />
        <Route exact path="/Luggage&Bags" component={LuggageAndBags_Render} />
        <Route exact path="/Shoes" component={ShoesRender} />
        <Route exact path="/Sports&Entertainment" component={SportsProduct_Render} />
        <Route exact path="/AllCategories" component={AllRender} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/cart" component={CartPage} />

      </Switch>
      <Footer />

    </Router>





  );
}

export default App;

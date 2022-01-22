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
import CartProviderIph11max from './Components/ProductPage/Iph11max/CartProviderIph11max';
import CartProviderNokia from './Components/ProductPage/Nokia/CartProviderNokia';
import SamsungNote20Ultra from './Components/ProductPage/SamsungNote20Ultra';
import SnakeRing from './Components/ProductPage/SnakeRing';
import SweatShirt from './Components/ProductPage/SweatShirt';
import UlyssenWatch from './Components/ProductPage/UlyssenWatch';
import CartProviderNikeShoes from './Components/ProductPage/NikeShoes/CartProviderNikeShoes';
import CartProviderMacBook from './Components/ProductPage/MacBookAir/CartProviderMacBook';
import XiaomiMiScooter from './Components/ProductPage/XiaomiMiScooter';
import CartProviderLenovo from './Components/ProductPage/LenovoThinkPad/CartProviderLenovo';
import CartProviderIphone11 from './Components/ProductPage/Iphone11/CartProviderIphone11'
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
import CartProviderBabyCart from './Components/ProductPage/BabyCart/CartProviderBabyCart'
// import CartProviderNikeShoes from './Components/ProductPage/NikeShoes/CartProviderNikeShoes';
import CartProviderMulti from './Components/ProductPage/multi/CartProviderMulti';
import SingleSofa from './Components/ProductPage/SingleSofa';
import CartProviderCortaCesped from './Components/ProductPage/CortaCesped/CartProviderCortaCesped';
import TravelBag from './Components/ProductPage/TravelBag';
import CartProviderPaletin from './Components/ProductPage/Paletin/CartProviderPaletin';
import CartProviderBabyBath from './Components/ProductPage/BabyBath/CartProviderBabyBath';
import CartProviderBabySpoons from './Components/ProductPage/BabySpoons/CartProviderBabySpoons';
import WoodChair from './Components/ProductPage/WoodChair';
import CartProviderMesaNegra from './Components/ProductPage/MesaNegra/CartProviderMesaNegra'; 
import CartProviderNikeSport from './Components/ProductPage/NikeSport/CartProviderNikeSport';


function App() {
  return (
    <Router>

      <NavBar />
      <Switch>
        <Route exact path="/" component={HomeComponent} />
        <Route exact path="/S20" component={ProductpgS20} />
        <Route exact path="/Iphone11pmax" component={CartProviderIph11max} />
        <Route exact path="/nokia3320" component={CartProviderNokia} />
        <Route exact path="/SamsungNote20" component={SamsungNote20Ultra} />
        <Route exact path="/SnakeRing" component={SnakeRing} />
        <Route exact path="/SweatShirt" component={SweatShirt} />
        <Route exact path="/UlyssenWatch" component={UlyssenWatch} />
        <Route exact path="/Nike" component={CartProviderNikeShoes} />
        <Route exact path="/MacBookAir" component={CartProviderMacBook} />
        <Route exact path="/XiaomiScooter" component={XiaomiMiScooter} />
        <Route exact path="/Lenovo" component={CartProviderLenovo} />
        <Route exact path="/Iphone11" component={CartProviderIphone11} />
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
        <Route exact path="/babyCart" component={CartProviderBabyCart} />
        <Route exact path="/nikeSport" component={CartProviderNikeSport} />
        <Route exact path="/multivitaminico" component={CartProviderMulti} />
        <Route exact path="/singlesofa" component={SingleSofa} />
        <Route exact path="/Cortacesped" component={CartProviderCortaCesped} />
        <Route exact path="/travelBag" component={TravelBag} />
        <Route exact path="/paletin" component={CartProviderPaletin} />
        <Route exact path="/babyBath" component={CartProviderBabyBath} />
        <Route exact path="/babySpoons" component={CartProviderBabySpoons} />
        <Route exact path="/woodchair" component={WoodChair} />
        <Route exact path="/mesanegra" component={CartProviderMesaNegra} />

      </Switch>
      <Footer />

    </Router>





  );
}

export default App;

import Header from "./components/Header/Header.js";
import Treatments from "./components/Treatments/Treatments.js";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart.js";
import { Fragment, useState } from "react";


function App() {

  const [cartIsShown, setCartIsShown]=useState(false);

  const chartShownHandler=(Clicked)=>{
    if(Clicked){
      setCartIsShown(true);
    }
    else{
      setCartIsShown(false);
    }
  }
  
  return (
    <Fragment>
     {cartIsShown && <ShoppingCart onShowCart={chartShownHandler}/>} 
      <Header onChartClicked={chartShownHandler}/>
      <Treatments />
    </Fragment>
  );
}

export default App;

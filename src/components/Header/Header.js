import classes from "./Header.module.css";
import { Fragment } from "react";
import mealsImage from "../../pictures/kitten.jpg";
import HeaderButton from "./HeaderButton";


const Header=(props)=>{
return (
    <Fragment>
        <header className={classes.header}>
            <h1>Cat Cosmetics M&M</h1>
            <HeaderButton/>
        </header>

        <div className={classes.mainImage}>
            <img src={mealsImage} alt="Sweet kitten"></img>
        </div>
    </Fragment>
);
};

export default Header;
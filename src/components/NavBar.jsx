import React from "react";
import PropTypes from "prop-types";


function NavBar (props) {

    const {clickPrecedent, clickSuivant} = props

 return (
    <div>
     <button onClick={clickPrecedent}>Précedent</button>
     <button onClick={clickSuivant}>Suivant</button>
    </div>
)   
}


export default NavBar;
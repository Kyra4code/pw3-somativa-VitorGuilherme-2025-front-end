import React, { useState, useEffect } from "react";
import style from "./PokeCards.module.css"

const PokeCards = ({PokeName}) => {
    return(
        <div className={style.container}>
            <h5>{PokeName}</h5>
        </div>
    );
}

export default PokeCards;
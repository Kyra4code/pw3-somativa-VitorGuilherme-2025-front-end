import React, { useState, useEffect } from "react";
import style from "./PokeCards.module.css"

const PokeCards = ({PokeName, PokeImage}) => {
    return(
        <div className={style.container}>
            <img src={PokeImage} alt={PokeName} className={style.img}/>
            <h5>{PokeName}</h5>
        </div>
    );
}

export default PokeCards;
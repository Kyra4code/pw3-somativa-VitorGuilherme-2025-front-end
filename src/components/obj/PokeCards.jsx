import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./PokeCards.module.css"

const PokeCards = ({PokeName, PokeImage, onPress}) => {
    return(
        <div className={style.container} onClick={onPress}>
            {PokeImage &&(
                <img src={PokeImage} alt={PokeName} className={style.img}/>
            )}
            <h5>{PokeName}</h5>
        </div>
    );
}

export default PokeCards;
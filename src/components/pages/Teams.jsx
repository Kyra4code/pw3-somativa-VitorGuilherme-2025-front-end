import styles from "./teams.module.css";
import PokeCards from '../obj/PokeCards'
import { useState, useEffect } from "react";
import axios from "axios";

export default function Teams(){
    
    let pokeDados;

    useEffect(async()=>{
        pokeDados = await axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=151")
        console.log(pokeDados.data)
    },[])

    return(
        <div className={styles.container}>
            <PokeCards PokeName="Pikachu"/>
        </div>
    );
}
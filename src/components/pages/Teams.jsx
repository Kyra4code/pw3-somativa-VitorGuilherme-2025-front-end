import styles from "./teams.module.css";
import PokeCards from '../obj/PokeCards'
import { useState, useEffect } from "react";
import axios from "axios";

export default function Teams(){
    
    const [pokeDados, setPokeDados] = useState([]);


    useEffect(()=>{
        const fetchData = async () => {
            let pokeList = [];
            for(let i = 1; i <= 151; i++){
                pokeList.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
            }
            await axios.all(pokeList.map(poke => axios.get(poke))).then((res) => setPokeDados(res));
        }

        fetchData();
    },[])

    {if(pokeDados.length === 0){
        return <div className={styles.loading}>Carregando...</div>;
    }}
    return(
        <div className={styles.container}>
            {pokeDados.map((pokemon)=>(
                <PokeCards PokeName={pokemon.data.name} PokeImage={pokemon.data.sprites.front_default}/>
            ))}
        </div>
    );
}
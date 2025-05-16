import styles from "./teams.module.css";
import PokeCards from '../obj/PokeCards'
import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

export default function Teams(){
    
    const [pokeDados, setPokeDados] = useState([]);

    const navigate = useNavigate();

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

    {if(!pokeDados){
        return <div className={styles.loading}>Carregando...</div>
    }}
    return(
        <div className={styles.container}>
            {pokeDados.map((pokemon)=>(
                <PokeCards key={pokemon.data.id} PokeName={pokemon.data.name} PokeImage={pokemon.data.sprites.front_default} onPress={()=>navigate(`/PokeDetails/${pokemon.data.id}`)}/>
            ))}
        </div>
    );
}
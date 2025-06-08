import react, { useState, useEffect} from "react";
import axios from "axios";

export default function Teams(){

    const [teams, setTeams] = useState([]);
    const [pokeDados, setPokeDados] = useState([])


    useEffect(async()=>{
        const response = await axios.get("http://localhost:3000/teams");

        if(response){
            setTeams(response.data)
        }

        for( teams in teams){
            const resp = axios.get(`https://pokeapi.co/api/v2/pokemon/${teams.name}/`)
            pokeDados.push(resp.data)
        }

    },[])

    return(
        
        <div>

            {pokeDados.map((pokemon)=>(
                <PokeCards key={pokemon.data.id} PokeName={pokemon.data.name} PokeImage={pokemon.data.sprites.front_default} onPress={()=>navigate(`/PokeDetails/${pokemon.data.id}`)}/>
            ))}
            
        </div>

    );
}
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PokeDetails() {

    const {poke_id} = useParams();
    const [Pokedata, setPokedata] = useState([]);

    useEffect(()=>{
        const dados = []
        async function getPokemonDados(){
            dados.push(await axios.get(`https://pokeapi.co/api/v2/pokemon/${poke_id}/`))
            setPokedata(dados[0].data)
            // console.log(Pokedata.stats[0].stat.name)
        }

        getPokemonDados();
    })

    if(!Pokedata) return <div>Carregando</div>

    if(Pokedata){

        return (  
            <div>
                <div>

                    {/* <img src={Pokedata.sprites.front_default}/> */}

                    {/* <img src={Pokedata.sprites.back_default}/> */}

                </div>

                <div>

                    <h1>{Pokedata.name}</h1>
                    <h1>Base Status</h1>

                </div>
            </div>
        );

    }
}
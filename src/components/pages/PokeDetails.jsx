import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./PokeDetails.module.css" 

export default function PokeDetails() {

    const {poke_id} = useParams();
    const [Pokedata, setPokedata] = useState(null);

    useEffect(()=>{
        try{
            async function getPokemonDados(){
                if(Pokedata) return;
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${poke_id}/?cache=true`)
                setPokedata(response.data)
            }

            getPokemonDados();
        }
        catch(error){
            console.log(error)
        }
    },[poke_id])

    if(!Pokedata) return <div>Carregando</div>

    if(Pokedata){

       return (  
        <div className={styles.container}>
            <div>

                {Pokedata.sprites?.front_default && (
                    <img src={Pokedata.sprites.front_default} alt={`${Pokedata.name} front`} />
                )}
                {Pokedata.sprites?.back_default && (
                    <img src={Pokedata.sprites.back_default} alt={`${Pokedata.name} back`} />
                )}

            </div>

            <div>
                <h1>{Pokedata.name.toUpperCase()}</h1>

                <h1>Tipo</h1>
                
                <div className={styles.container_tipo}>
                    {Pokedata.types.map((tipo, index) => (
                        <div key={index}>
                            <h5>{tipo.type.name[0].toUpperCase() + tipo.type.name.slice(1)}</h5>
                        </div>
                    ))}
                </div>

                <h1>Base Status</h1>

                <div className={styles.container_statusBase}>
                    {Pokedata.stats.map((stat, index) => (
                        <div key={index}>
                            <h5>{stat.stat.name[0].toUpperCase() + stat.stat.name.slice(1)}</h5><h5>{stat.base_stat}</h5>
                        </div>
                    ))}
                </div>

                <h1>Habilidades</h1>

                <div className={styles.container_habilidades}>
                    {Pokedata.abilities.map((habilidade, index) => (
                        <div key={index}>
                            <h5>{habilidade.ability.name[0].toUpperCase() + habilidade.ability.name.slice(1)}</h5>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );

    }
}
import styles from "./cadastro.module.css";
import Modal from "../layout/Modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../obj/CustomButton";
import CustomInput from "../obj/CustomInput";
import axios from "axios";

export default function Cadastro() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [showPass, setShowPass] = useState(false);
    const [openModal, setOpenModal] = useState(true);
    const navigate = useNavigate();

    async function Cadastrar(event){
        event.preventDefault();

        const data = {
            username: username,
            email: email,
            password: password
        };

        try{
            const response = await axios.post("http://localhost:3000/user/createUser", data);
            if(response.status === 200 || response.status === 201){
                alert("Cadastro realizado com sucesso!");
                navigate('/login');
            }
        }catch(error){
            console.error("Erro ao cadastrar:", error);
            alert("Erro ao cadastrar. Tente novamente.");
        }
    }

    return (
        <Modal isOpen={openModal}>

            <div className="login">

                <button onClick={ ()=>{setOpenModal(false); navigate("/")} } className={styles.button_close}>X</button>

                <h1>Cadastrar conta</h1>

                <form className={styles.form}>
                    
                    <CustomInput 
                        type="text" 
                        placeholder="Username" 
                        value={username} 
                        setValue={(e)=>{setUsername(e.target.value)}}
                    /> 

                    <CustomInput 
                        type="text" 
                        value={email} 
                        setValue={(e)=>setEmail(e.target.value)} 
                        placeholder="Email"
                    />

                    <CustomInput 
                        type={showPass ? "text": "password"} 
                        placeholder="Password" 
                        value={password} 
                        setValue={(e)=>{setPassword(e.target.value)}}
                    >
                        <button 
                            className={styles.icon_show_password} 
                            onClick={(e)=>{ e.preventDefault(); setShowPass(!showPass)}}
                        >

                            <img 
                                src={showPass? "foto.png": "visivel.png"} 
                                style={{height:"65%", width: "100%"}}
                            />

                        </button>
                    </CustomInput>

                    <CustomButton Click={Cadastrar} title="Cadastrar-se"/>

                </form>

                <p>Já possui conta? <a onClick={()=>navigate('/login')} style={{color: 'blue'}}>Login</a></p>

            </div>
        </Modal>

    )
}
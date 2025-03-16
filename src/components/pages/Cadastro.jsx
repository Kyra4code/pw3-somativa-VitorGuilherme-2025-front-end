import styles from "./cadastro.module.css";
import Modal from "../layout/Modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Cadastro() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [showPass, setShowPass] = useState(false);
    const [openModal, setOpenModal] = useState(true);
    const navigate = useNavigate();

    async function Cadastrar(event){
        event.preventDefault();
        console.log(username, password, email);
    }

    function close(){  
        setOpenModal(false);
        navigate('/');
    }

    return (
        <Modal isOpen={openModal}>

            <div className="login">

                <button onClick={close}>X</button>

                <h1>Login</h1>

                <form className={styles.form}>
                    
                    <input type="text" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>

                    <input type="text" placeholder="Username" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>

                    <div style={{ position: "relative", display: "flex", alignItems: "center" }}>    

                        <input type={showPass ? "text": "password"} placeholder="Password" style={{ paddingRight: "30px" }} value={password} onChange={(e)=>{setPassword(e.target.value)}}/>

                        <button className={styles.icon_show_password} onClick={(e)=>{ e.preventDefault(); setShowPass(!showPass)}}>

                            <img src={showPass? "./visivel.png": "foto.png"} style={{height:"70%", width: "71%"}}/>

                        </button>
                    </div>

                    <button onClick={Cadastrar}>Cadastrar</button>

                </form>

            </div>
        </Modal>

    )
}
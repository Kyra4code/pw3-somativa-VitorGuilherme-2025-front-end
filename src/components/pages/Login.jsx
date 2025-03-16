import { useNavigate } from 'react-router-dom';
import Modal from '../layout/Modal';
import { useState } from 'react';
import styles from './login.module.css';

export default function Login({isOpen}) {

    const [openModal, setOpenModal] = useState(true);
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [showPass, setShowPass] = useState(false);

    const navigate = useNavigate();

    function close(){
        setOpenModal(false);
        navigate('/');
    }

    return (
        <Modal isOpen={openModal}>

            <div className="login">

                <button onClick={close} >X</button>

                <h1>Login</h1>

                <form>

                    <input type="text" placeholder="Username" value={user}/>

                    <div style={{ position: "relative", display: "flex", alignItems: "center" }}>    

                        <input type={showPass ? "text": "password"} placeholder="Password" style={{ paddingRight: "30px" }}/>

                        <button className={styles.icon_show_password} onClick={(e)=>{ e.preventDefault(); setShowPass(!showPass)}}><img src={showPass? "./visivel.png": "foto.png"} style={{height:"70%", width: "70%"}}/></button>
                    </div>

                    <button onClick={(event)=>{event.preventDefault()}}>Submit</button>

                </form>

            </div>
        </Modal>

    )
}
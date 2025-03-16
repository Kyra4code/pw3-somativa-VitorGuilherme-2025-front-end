import { useNavigate } from 'react-router-dom';
import Modal from '../layout/Modal';
import { useState } from 'react';
import CustomInput from '../obj/CustomInput';
import CustomButton from '../obj/CustomButton';
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

    function login(event){
        event.preventDefault();
        console.log(user, password);
    }


    return (
        <Modal isOpen={openModal}>

            <div className="login">

                <button onClick={close} className={styles.button_close}>X</button>

                <h1 className={styles.title}>Login</h1>

                <form className={styles.form}>

                    <CustomInput 
                        type="text" 
                        placeholder="Username" 
                        value={user}
                        setValue={(event)=>{setUser(event.target.value)}}
                    />

                    <CustomInput 
                        type={showPass ? "text": "password"} 
                        placeholder="Password" 
                        value={password} 
                        setValue={(event)=>{setPassword(event.target.value)}}
                    >
                        <button className={styles.icon_show_password} onClick={(e)=>{ e.preventDefault(); setShowPass(!showPass)}}>

                            <img src={showPass? "./visivel.png": "foto.png"} style={{height:"65%", width: "100%"}}/>

                        </button>
                    </CustomInput>

                    <CustomButton Click={login} title="Conectar-se"/>

                </form>

                <p>Não possui conta? <a onClick={()=>navigate('/cadastro')} style={{color: 'blue'}}>Cadastrar</a></p>

            </div>

        </Modal>

    )
}
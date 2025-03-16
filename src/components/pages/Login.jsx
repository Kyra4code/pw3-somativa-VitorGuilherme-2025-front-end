import { useNavigate } from 'react-router-dom';
import Modal from '../layout/Modal';
import { useState } from 'react';

export default function Login({isOpen}) {

    const [openModal, setOpenModal] = useState(true);
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

                    <input type="text" placeholder="Username"/>

                    <input type="password" placeholder="Password"/>

                    <button onClick={(event)=>{event.preventDefault()}}>Submit</button>

                </form>
            </div>
        </Modal>

    )
}
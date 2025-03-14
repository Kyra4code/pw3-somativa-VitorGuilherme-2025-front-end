import { Outlet, Link } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function NavBar(){
    return(
        <>
            <nav className={styles.nav}>
                
                <ul className={styles.lista}>
                    
                    <Link to="/">
                        <img src="./Home.png" alt="icone do home da pagina" className={styles.nav_icon}/>
                    </Link>

                        <div className={styles.items_labels}>

                            <Link to="/">
                                <li className={styles.items}>Home</li>
                            </Link>

                            <Link to="/teams">
                                <li>Times</li>
                            </Link>

                            <Link to="/login">
                                <img src="./AccountIcon.png" alt="Icone de login" className={styles.nav_icon}/>
                            </Link>

                        </div>

                </ul>
            </nav>
            <Outlet/>
        </>
    );
}
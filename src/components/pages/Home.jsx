import styles from "./home.module.css"

export default function Home(){
    return(
        <div className={styles.container_home}>
            
            <div className={styles.title}>
                
                <h1>Bem vindo ao montador de times!</h1>

            </div>

            <div className={styles.explain}>
            
                <h2>Esse app se trata de um montador de times pokemon para você que precisa montar aquele time para campemonatos ou jogos competitivos simples!</h2>

            </div>

        </div>
    )
}
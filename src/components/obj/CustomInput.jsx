import react from 'react';
import styles from './customInput.module.css';

export default function CustomInput({type, value, setValue, placeholder, children}){
    return(
    <div className={styles.input}>

        <input 
            type={type} 
            value={value} 
            onChange={setValue} 
            placeholder={placeholder}
        />
        
        {children}

    </div>
    )
}
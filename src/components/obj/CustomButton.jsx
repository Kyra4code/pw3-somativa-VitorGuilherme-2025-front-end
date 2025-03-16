import React from 'react';
import styles from './customButton.module.css';

export default function CustomButton({Click, title}){
    return(
        <div className={styles.button}>
            <button onClick={Click}>{title}</button>
        </div>
    )
}
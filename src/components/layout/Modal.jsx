import { useState } from 'react';
import styles from "./modal.module.css";

export default function Modal({isOpen, children}){

    if(isOpen){
    return(
        <div className={styles.back_modal}>
            <div className={styles.modal_style}>

                {children}

            </div>

        </div>
    )
}
}
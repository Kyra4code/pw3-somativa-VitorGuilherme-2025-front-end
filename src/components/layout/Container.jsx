import React from "react"
import "./container.module.css"

export default function Container(props){
    return(
        <div>
            {props.children}
        </div>
    )
}
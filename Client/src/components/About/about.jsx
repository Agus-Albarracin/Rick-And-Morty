import React from "react";
import styles from '../About/about.css'

export default function About(){
    return (
        <div className="div__cont__about">
 
        <div className="aboutCont"> 
        <img className="imgAbout" src="https://i.gifer.com/ZiaV.gif"></img>
        </div>
        <div className={styles.div__texts}>
            <div className="div__saludo">
                Hola Mundoo!
            </div>
            <div className="div__datas">
                Nombre: Agustin Albarracin<br></br>
                cohorte: 14a - Part time

            </div>
        </div>

        </div>

  
    )
}
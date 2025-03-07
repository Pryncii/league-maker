import React from 'react'
import styles from './Card.module.css'
import { useNavigate } from "react-router-dom";

function Card(props){
    const navigate = useNavigate();
    return( 
        <button className={styles.card} onClick={() => navigate(props.link)}>
            <img className={styles.cardFrame} src={props.cardImgName} alt={props.cardName} />
            <div className={styles.cardName}>{props.cardName}</div>
            <div className={styles.cardDesc}>{props.cardDesc}</div>
        </button>
    );
}
export default Card
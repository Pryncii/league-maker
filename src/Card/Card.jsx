import React from 'react'
import styles from './Card.module.css'

function Card(props){
    return( 
        <div className={styles.card}>
            <img className={styles.cardFrame} src={props.cardImgName} alt={props.cardName} />
            <div className={styles.cardName}>{props.cardName}</div>
            <div className={styles.cardDesc}>{props.cardDesc}</div>
        </div>
    );
}
export default Card
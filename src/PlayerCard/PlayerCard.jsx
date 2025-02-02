import React from 'react'
import styles from './PlayerCard.module.css'

function PlayerCard(props){
    return( 
        <button className={styles.card} onClick={props.onClick}>
            <img className={styles.cardFrame} src={props.cardImgName} alt={props.cardName} />
            <div className={styles.cardName}>{props.cardName}</div>
            <div className={styles.cardDesc}>{props.cardDesc}</div>
        </button>
    );
}
export default PlayerCard
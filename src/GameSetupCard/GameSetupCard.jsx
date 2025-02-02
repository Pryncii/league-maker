import React from 'react'
import styles from './GameSetupCard.module.css'

function GameSetupCard(props){
    return( 
        <>
            <div className={styles.card}>
                <div className={styles.cardName}>{props.cardName}</div>
            </div>
            <div className={styles.bigcard}>
                <div className={styles.cardName}>{props.bigcardName}</div>
            </div>
        </>
    );
}
export default GameSetupCard
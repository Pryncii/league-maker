import React from 'react'
import styles from './GameSetupCard.module.css'
import { useState } from "react";

function GameSetupCard(props){
const [time, setTime] = useState(0);
const [quarters, setQuarters] = useState(1);
const subtractTime = (event) => {
    if (time > 0){
        setTime(time - 1);
    }
  };

const addTime = (event) => {
    if (time < 12){
        setTime(time + 1);
    }
};
    return( 
        <>
            <div className={styles.card}>
                <div className={styles.cardName}>
                    {props.cardName}
                </div>
                <br/>
                <div>
                    <button className = "buttonDes" onClick={() => addTime({time})}>▲</button>
                        <div className={styles.timeText}>{time}:00</div>
                    <button className = "buttonDes" onClick={() => subtractTime({time})}>▼</button>
                </div>
                <div>
                    <button className = "buttonDes" onClick={() => addTime({time})}>▲</button>
                        <div className={styles.timeText}>{time}:00</div>
                    <button className = "buttonDes" onClick={() => subtractTime({time})}>▼</button>
                </div>
            </div>
            <div className={styles.bigcard}>
                <div className={styles.cardName}>{props.bigcardName}</div>
            </div>
        </>
    );
}
export default GameSetupCard
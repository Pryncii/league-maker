import React from 'react'
import styles from './GameSetupCard.module.css'
import { useState } from "react";
import clockPic from '../assets/clockImg.png'
import teamPic from '../assets/teamImg.png'

function GameSetupCard(props){
const [time, setTime] = useState(0);
const [qtrs, setQtrs] = useState(1);
const [playerNum1, setPlayerNum1] = useState(1);
const [playerNum2, setPlayerNum2] = useState(1);
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

const subtractQtrs = (event) => {
    if (qtrs > 1){
        setQtrs(qtrs - 1);
    }
  };

const addQtrs = (event) => {
    if (qtrs < 4){
        setQtrs(qtrs + 1);
    }
};

const subtractPlayerNum1 = (event) => {
    if (playerNum1 > 1){
        setQtrs(playerNum1 - 1);
    }
  };

const addPlayerNum1 = (event) => {
    if (playerNum1 < 5){
        setQtrs(playerNum1 + 1);
    }
};

const subtractPlayerNum2 = (event) => {
    if (playerNum2 > 1){
        setQtrs(playerNum2 - 1);
    }
  };

const addPlayerNum2 = (event) => {
    if (playerNum2 < 5){
        setQtrs(playerNum2 + 1);
    }
}
    return( 
        <>
            <div className={styles.card}>
                <div className={styles.cardSection}>
                    <div className={styles.cardName}>
                        {props.cardName}
                    </div>
                    <img src={clockPic} />
                </div>
                <br/>
                <div className={styles.cardSection}> 
                    <div  className={styles.timeText}>Time: {time}:00</div>
                    <button className={styles.buttonDes} onClick={() => addTime({time})}>▲</button>
                    <button onClick={() => subtractTime({time})}>▼</button>
                </div>
                <div className={styles.cardSection}>
                    <div className={styles.timeText}>Quarters: {qtrs}</div>
                    <button className={styles.buttonDes} onClick={() => addQtrs({qtrs})}>▲</button>
                    <button onClick={() => subtractQtrs({qtrs})}>▼</button>
                </div>
            </div>
            <div className={styles.bigcard}>
                <div className={styles.cardSection}>
                    <div className={styles.cardName}>{props.bigcardName}</div>
                    <img src={teamPic} />
                </div>
                <div className={styles.bigcardSection}>
                <div className={styles.teamSection}>
                    <div className={styles.cardSection}>
                        <button onClick={() => subtractQtrs({qtrs})}>-</button>
                        <input type="text" placeholder="Team 1" />
                        <button onClick={() => subtractQtrs({qtrs})}>+</button>
                    </div>
                </div>
                    <div className={styles.teamSection}>   
                        <div className={styles.cardSection}>
                            <button onClick={() => subtractQtrs({qtrs})}>-</button>
                            <input type="text" placeholder="Team 2" />
                            <button onClick={() => subtractQtrs({qtrs})}>+</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default GameSetupCard
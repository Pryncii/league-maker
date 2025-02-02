
import Card from './Card/Card.jsx'
import profilePic from './assets/leagueImg.png'
import ballPic from './assets/ballImg.png'
import playerPic from './assets/playerImg.png'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  //each card has an cardImgName, cardName, and cardDesc
  return (<>
    <div className = "container">
      <Card cardImgName = {ballPic} cardName = "Quick Game" cardDesc = "Track the stats of a quick game!"/>
      <Card cardImgName = {profilePic} cardName = "League" cardDesc = "Start your own basketball league!"/>
      <Card cardImgName = {playerPic} cardName = "Player" cardDesc = "Add and keep track of a Player's performance!"/>
    </div>
  </>);

}

export default App


import Card from './Card/Card.jsx'
import profilePic from './assets/leagueImg.png'

function App() {
  //each card has an cardImgName, cardName, and cardDesc
  return (<>
    <Card cardImgName = {profilePic} cardName = "League" cardDesc = "Start your own basketball league!"/>
  </>);

}

export default App

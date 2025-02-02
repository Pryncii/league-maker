
import MainMenu from './MainMenu.jsx'
import QuickGame from './QuickGame.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  //each card has an cardImgName, cardName, and cardDesc
  return (<>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<MainMenu />} />
            <Route path="/quickgame" element={<QuickGame />} />
          </Routes>
        </div>
      </Router>
  </>);

}

export default App

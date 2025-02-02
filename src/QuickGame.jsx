
import React from 'react';
import GameSetupCard from './GameSetupCard/GameSetupCard';

function QuickGame() {
    return (
        (<>
            <div className = "container">
              <GameSetupCard cardName = "Game Length" bigcardName = "Team Compositon"/>
            </div>
          </>)
    );
}

export default QuickGame;   
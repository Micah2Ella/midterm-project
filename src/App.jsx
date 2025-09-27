import React from "react";
import { PlayerProvider, useName } from "./contexts/PlayerName";
import Game from "./components/Game"
import StartScreen from "./components/StartGame";
import { clearGame } from "./storage"

function AppContent() {
  const { playerName, setPlayerName } = useName();
  const [started, setStarted] = React.useState(!!playerName);

  function handleStart() {
    setStarted(true);
  }

  function handleReset() {
    clearGame();            
    setPlayerName("");      
    setStarted(false);      
  }

  return (
    <>
      {started ? (
        <>
          <Game />
          <button onClick={handleReset}>Reset Game</button>
        </>
      ) : (
        <StartScreen onStart={handleStart} />
      )}
    </>
  );
}

export default function App() {
  return (
    <PlayerProvider>
      <AppContent />
    </PlayerProvider>
  );
}
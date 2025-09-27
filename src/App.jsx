import React from "react";
import { PlayerProvider, useName } from "./contexts/PlayerName";
import { InventoryProvider } from "./contexts/PlayerInventory";
import { HealthProvider } from "./contexts/PlayerHealth";
import Game from "./components/Game"
import StartScreen from "./components/StartGame";
import { useGameReset } from "./hooks/useGameReset"

function AppContent() {
  const { playerName, setPlayerName } = useName();
  const [started, setStarted] = React.useState(!!playerName);

  const resetAll = useGameReset();

  function handleStart() {
    setStarted(true);
  }

  function handleReset() {
    resetAll();
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
      <InventoryProvider>
        <HealthProvider>
          <AppContent />  
        </HealthProvider>
      </InventoryProvider>
    </PlayerProvider>
  );
}
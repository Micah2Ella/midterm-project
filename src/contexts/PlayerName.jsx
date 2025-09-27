import { createContext, useState, useContext, useEffect } from 'react';
import { loadGame, saveGame } from "../storage.js";

const PlayerName = createContext();

export function PlayerProvider({ children }) {
    const saved = loadGame();
    const [playerName, setPlayerName] = useState(saved?.playerName||"");

    useEffect (() => {
        const current = loadGame() || {};
        saveGame({ ...current, playerName });
  }, [playerName]);

  function resetName() {
    setPlayerName("");
  }
  
  return (
    <PlayerName.Provider value={{ playerName, setPlayerName, resetName }}>
      {children}
    </PlayerName.Provider>
  );
}

export const useName = () => useContext(PlayerName);
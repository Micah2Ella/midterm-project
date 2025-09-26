import React, { createContext, useState, useContext, useEffect } from 'react';
import { loadGame, saveGame } from "./storage";

const PlayerName = createContext();

export function PlayerProvider({ children }) {
    const saved = loadGame();
    const [playerName, setPlayerName] = useState(saved?.playerName||"");

    useEffect (() => {
        const current = loadGame() || {};
        saveGame({ ...current, playerName });
  }, [playerName]);
  
  return (
    <PlayerName.Provider value={{ playerName, setPlayerName }}>
      {children}
    </PlayerName.Provider>
  );
}

export const useName = () => useContext(PlayerName);
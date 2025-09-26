import React, { createContext, useState, useContext, useEffect } from 'react';
import { loadGame, saveGame } from "./storage";

const PlayerHealth = createContext();

export function HealthProvider({ children }) {
    const saved = loadGame();
    const [health, setHealth] = useState(saved?.health ?? 100);
    const [life, setLife] = useState(saved?.life || 'alive');

    function TakeDamage(damage){
        setHealth(prev => Math.max(prev - amount, 0));
    }

    useEffect (()=> {
        if (health <= 0 && life !== "dead") {
            setLife('dead');
        }
        const current = loadGame() || {};
        saveGame({ ...current, health, life });
  }, [health, life]);

  return (
    <PlayerHealth.Provider value={{ health, life, TakeDamage }}>
      {children}
    </PlayerHealth.Provider>
  );
}

export const useHealth = () => useContext(PlayerHealth);
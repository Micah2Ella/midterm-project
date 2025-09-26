import React, { createContext, useState, useContext, useEffect } from 'react';

const PlayerHealth = createContext();

export function HealthProvider({ children }) {

    const [health, setHealth] = useState(100);
    const [life, setLife] = useState('alive');

    useEffect (()=> {
        if (health <= 0) {
            setLife('dead');
        }
    }, [health]);

    function TakeDamage(damage){
        setHealth(prev => Math.max(prev - amount, 0));
    }

  return (
    <PlayerHealth.Provider value={{ health, life, TakeDamage }}>
      {children}
    </PlayerHealth.Provider>
  );
}

export const useHealth = () => useContext(PlayerHealth);
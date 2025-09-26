import React, { createContext, useState, useContext } from 'react';

const PlayerHealth = createContext();

export function HealthProvider({ children }) {

  function LifeState( {initialHealth = 100} ) {

    const [health, setHealth] = useState(initialHealth);
    const [life, setLife] = useState('alive');
  
    if (health < 0) {
      setLife(lifeStatus => (lifeStatus ='dead'));
  }
  }

  return (
    <PlayerHealth.Provider value={{ health, life, LifeState }}>
      {children}
    </PlayerHealth.Provider>
  );
}

export const useHealth = () => useContext(PlayerHealth);
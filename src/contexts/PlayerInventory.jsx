import React, { createContext, useState, useContext } from 'react';

const PlayerInventory = createContext();

export function InventoryProvider({ children }) {
  const [hasItem, setIsLoggedIn] = useState(false);
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <PlayerInventory.Provider value={{ theme, toggleTheme }}>
      {children}
    </PlayerInventory.Provider>
  );
}

export const useInventory = () => useContext(PlayerInventory);
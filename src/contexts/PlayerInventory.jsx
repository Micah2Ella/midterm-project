import React, { createContext, useState, useContext } from 'react';

const PlayerInventory = createContext();

export function InventoryProvider({ children }) {
  const [asin, setAsinPresent] = useState(false);
  const [bawang, setBawangPresent] = useState(false);
  const [agimat, setAgimatPresent] = useState(false);
  
  function ItemPresent() {
    if (addItem = 'Asin') {
      setAsinPresent = useState(true);
  }

    if (addItem = 'Bawang') {
      setBawangPresent = useState(true);
  }

    if (addItem = 'Agimat') {
      setAgimatPresent = useState(true);
  }
  }

  return (
    <PlayerInventory.Provider value={{ asin, bawang, agimat, ItemPresent }}>
      {children}
    </PlayerInventory.Provider>
  );
}

export const useInventory = () => useContext(PlayerInventory);
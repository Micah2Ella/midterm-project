import React, { createContext, useState, useContext } from 'react';

const PlayerInventory = createContext();

export function InventoryProvider({ children }) {
  const [inventory, setInventory] = useState([]);

  function addItem(itemName){
    setInventory(prev =>
     prev.includes(itemName) ? prev : [...prev, itemName]
    );
  }
  
  return (
    <PlayerInventory.Provider value={{ inventory, addItem }}>
      {children}
    </PlayerInventory.Provider>
  );
}

export const useInventory = () => useContext(PlayerInventory);
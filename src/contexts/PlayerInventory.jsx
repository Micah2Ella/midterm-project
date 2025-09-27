import { createContext, useState, useContext, useEffect } from 'react';
import { loadGame, saveGame } from "../storage.js";

const PlayerInventory = createContext();

export function InventoryProvider({ children }) {
  const saved = loadGame();
  const [inventory, setInventory] = useState(saved?.inventory || []);

  function addItem(itemName){
    setInventory(prev =>prev.includes(itemName) ? prev : [...prev, itemName]);
  }

  useEffect(() => {
    const current = loadGame() || {};
    saveGame({ ...current, inventory });
  }, [inventory]);

  function resetInventory() {
    setInventory([]);
  }

  return (
    <PlayerInventory.Provider value={{ inventory, addItem, resetInventory }}>
      {children}
    </PlayerInventory.Provider>
  );
}

export const useInventory = () => useContext(PlayerInventory);
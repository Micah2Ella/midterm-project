import { createContext, useState, useContext } from "react";

const PlayerHealth = createContext();

export function HealthProvider({ children }) {
  const [health, setHealth] = useState(100);

  function takeDamage(amount) {
    setHealth(prev => {
      const newHealth = prev - amount;
      if (newHealth <= 0) {

        window.dispatchEvent(new CustomEvent("gameOver"));
        return 0; 
      }
      return newHealth;
    });
  }

  function heal(amount) {
    setHealth(prev => Math.min(prev + amount, 100));
  }

  function resetHealth() {
    setHealth(100);
  }

  return (
    <PlayerHealth.Provider value={{ health, takeDamage, heal, resetHealth }}>
      {children}
    </PlayerHealth.Provider>
  );
}

export const useHealth = () => useContext(PlayerHealth);

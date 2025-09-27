import { useName } from "../contexts/PlayerName";
import { useInventory } from "../contexts/PlayerInventory";
import { useHealth } from "../contexts/PlayerHealth";
import { resetGame } from "../storage";

export function useGameReset() {
  const { resetName } = useName();
  const { resetInventory } = useInventory();
  const { resetHealth } = useHealth();

  function resetAll() {
    resetGame();        
    resetName();      
    resetInventory();   
    resetHealth();      
  }

  return resetAll;
}

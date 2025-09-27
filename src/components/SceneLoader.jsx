import storyData from "../data/story.json";
import { useArrive } from "../hooks/useArrive";
import { useRequire } from "../hooks/useRequire";
import { useInventory } from "../contexts/PlayerInventory";
import { useHealth } from "../contexts/PlayerHealth";

function SceneSetup({ sceneId, goTo }) {
  const { health } = useHealth();
  const { inventory } = useInventory();
  const scene = storyData[sceneId];

  useArrive(scene);
  const choices = useRequire(scene);

  if (scene.isEnding) {
    return (
      <div>
        <p>Health: {health}</p>
        <p>Inventory: {inventory.length > 0 ? inventory.join(", ") : "Empty"}</p>
        <p>{scene.text}</p>
        <p>-- THE END --</p>
      </div>
    );
  }

  return (
    <div>
      <p>Health: {health}</p>
      <p>Inventory: {inventory.length > 0 ? inventory.join(", ") : "Empty"}</p>
      <p>{scene.text}</p>
      <ul>
        {choices.map(choice => (
            <li key={choice.id}>
            <button onClick={() => goTo(choice.to)}>{choice.text}</button>
            </li>
        ))}
      </ul>
    </div>
  );
}

export default SceneSetup;

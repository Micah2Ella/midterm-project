import storyData from "../data/story.json";
import { useArrive } from "../hooks/useArrive";
import { useRequire } from "../hooks/useRequire";
import { useInventory } from "../contexts/PlayerInventory";
import { useHealth } from "../contexts/PlayerHealth";

function SceneSetup ({sceneId, goTo}) {
    const { health } = useHealth;
    const { inventory } = useInventory;
    const scene = storyData[sceneId];

    useArrive(scene);
    const choices = useRequire(scene);

    return ( 
    <div>
        <p>Health: {health}</p> <br></br>
        <p>Inventory: {inventory ? {inventory} : "..."}</p> <br></br>
        <p>{scene.text}</p> <br></br>
        <ul>
            {choices.map(choice => (
                <li key={choice.to}>
                    <button onClick={() => goTo(choice.to)}>{choice.text}</button>
                </li>
            ))}
        </ul>
    </div>
    );
}

export default SceneSetup;
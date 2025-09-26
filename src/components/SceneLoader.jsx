import storyData from "./story.json";
import { useArrive } from "./useArrive";
import { useRequire } from "./useRequire";

function SceneSetup ({sceneId, goTo}) {
    const scene = storyData[sceneId];

    useArrive(scene);
    const choices = useRequire(scene);

    return ( 
    <div>
        <p>{scene.text}</p>
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
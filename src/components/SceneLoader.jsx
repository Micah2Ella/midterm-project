import React, { useState } from "react";
import storyData from "./story.json";
import { useArrive } from "./useArrive";
import { useRequire } from "./useRequire";
import { useInventory } from "./InventoryProvider";
import { useHealth } from "./HealthProvider";

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
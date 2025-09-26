import React from "react";
import { loadGame, saveGame } from "./storage";
import SceneSetup from "./SceneSetup";
import { useInventory } from "./InventoryProvider";
import { useHealth } from "./HealthProvider";

function Game() {
  const saved = loadGame();
  const [sceneId, setSceneId] = React.useState(saved?.sceneId || "start");

  function goTo(nextScene) {
    setSceneId(nextScene);
  }

  React.useEffect(() => {
    const current = loadGame() || {};
    saveGame({ ...current, sceneId });
  }, [sceneId]);

  return <SceneSetup sceneId={sceneId} goTo={goTo} />;
}

export default Game;

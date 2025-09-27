import React from "react";
import { loadGame, saveGame } from "../storage";
import SceneSetup from "./SceneLoader";

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

  React.useEffect(() => {
    function handleGameOver() {
      setSceneId("gameOver_hp"); // <- switch to your special scene
    }

    window.addEventListener("gameOver", handleGameOver);
    return () => {
      window.removeEventListener("gameOver", handleGameOver);
    };
  }, []);

  return <SceneSetup sceneId={sceneId} goTo={goTo} />;
}

export default Game;

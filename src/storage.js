
export function saveGame(data) {
  localStorage.setItem("gameState", JSON.stringify(data));
}

export function loadGame() {
  const saved = localStorage.getItem("gameState");
  return saved ? JSON.parse(saved) : null;
}

export function resetGame() {
  localStorage.removeItem("gameState");
}
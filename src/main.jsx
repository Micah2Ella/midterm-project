import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HealthProvider } from "./contexts/PlayerHealth.jsx";
import { InventoryProvider } from './contexts/PlayerInventory.jsx';
import { PlayerProvider } from "./contexts/PlayerName.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PlayerProvider>
      <InventoryProvider>
        <HealthProvider>
          <App />
        </HealthProvider>
      </InventoryProvider>
    </PlayerProvider>
  </StrictMode>,
)

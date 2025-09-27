import { useEffect } from 'react';
import { useInventory } from "../contexts/PlayerInventory";
import { useHealth } from "../contexts/PlayerHealth";

export function useArrive (scene) {
    const { addItem } = useInventory();
    const { takeDamage } = useHealth();

    useEffect (() => {
        if (scene.onArrive?.addItem) {
            addItem(scene.onArrive.addItem);
        }
        if (scene.onArrive?.takeDamage) {
            takeDamage(scene.onArrive.takeDamage);
        }
    }, [scene]);
}
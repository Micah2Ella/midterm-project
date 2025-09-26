import React, { useEffect } from 'react';
import { useInventory } from "./InventoryProvider";
import { useHealth } from "./HealthProvider";

export function useArrive (scene) {
    const { addItem } = useInventory;
    const { takeDamage } = useHealth ;

    useEffect (() => {
        if (scene.onArrive?.addItem) {
            addItem(scene.onArrive.addItem);
        }
        if (scene.onArrive?.takeDamage) {
            takeDamage(scene.onArrive.takeDamage);
        }
    }, [scene]);
}
import { useInventory } from "../contexts/PlayerInventory";

export function useRequire (scene) {
    const { inventory } = useInventory();

    return scene.choices.filter(choice => {
        if (choice.requires && !inventory.includes(choice.requires)) {
            return false;
        }

        if (choice.hideIf && inventory.includes(choice.hideIf)) {
            return false;
        }

        return true;
    });
}
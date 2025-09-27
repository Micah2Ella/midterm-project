import React, { useState } from "react";
import { useName } from "../contexts/PlayerName";


function StartScreen({ OnStart }){
    const { setPlayerName } = useName();
    const [inputName, setInputName] = useState("");

    function handleChange(event) {
    setInputName(event.target.value);
    }

    function handleStartClick() {
        if (!inputName.trim()) {
            alert("Please enter your name before starting!");
            return;
        }
        setPlayerName(inputName);
        onStart();
        
    }

    return (
        <div>
        <h1>Aswang Hunters</h1>
            <input
                type="text"
                placeholder="Player Name"
                value={inputName}
                onChange={handleChange} 
            />
            <p>
                This is the start of Aswang Hunters! Are you ready for the quest
                {inputName ? `, ${inputName}` : "..."}?
            </p>
            <button onClick={handleStartClick}>Start Game</button>
        </div>
    );
}

export default StartScreen;

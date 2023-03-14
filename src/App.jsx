import React, {useRef} from "react"
import myHook from "./hooks/myHooks"
import "./App.css"

function App() {
    const {
        time ,
        handleChange,
        words, 
        wordCount, 
        startGame, 
        textBoxRef,
        isTimeRunning} = myHook()
        
    return (
        <div>
            <h1>How fast can you type?</h1>
            <textarea
            ref={textBoxRef}
            onChange={handleChange}
            value={words}
            disabled={!isTimeRunning}
            />
            <h4>Time Remaining: {time}</h4>
            <button 
            disabled={isTimeRunning}
            onClick={startGame}>
                {isTimeRunning === false && time === 0 ? 'Play again?': 'Start Game'}
            </button>
            <h1>Word Count: {wordCount}</h1>
        </div>
    )
}

export default App

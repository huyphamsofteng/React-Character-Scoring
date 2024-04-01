import { useState } from "react";
import "./CharBox.css"
export default function CharBox({numChar}){
    const [scores, setScores] = useState(new Array(numChar).fill(0));
    const addScore = (idx) => {
        setScores(prevS => {
            return prevS.map((score,i)=>{
                if (i === idx) return score += 1;
                return score; 
            })
        })
    }
    const reset = () => {
        setScores(() => {
            return new Array(numChar).fill(0)
        });
    }
    return (
        < div className="CharBox">
            {scores.map((score,i)=>{
                return (
                    <div className="char">
                        <h2>Character #{i+1} with the score {score}</h2>
                        <button onClick={()=> addScore(i)}>+1</button>
                    </div>
                );
            })}
            <button onClick={reset}>Reset</button>
        </div>
    );
}
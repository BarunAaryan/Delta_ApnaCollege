import { useState } from "react";
export default function Counter() {
    // let [stateVariable, setStateVariable] = useState(0); 
    let [count, setCount] = useState(0); //used for initialization
console.log(`Count is = ${count}`)
    let incCount = () => {
        setCount(count + 1);
        console.log(`Inside incCount, count = ${count}`);
    };
    return (
        <div>
            <h3>Count= {count}</h3>
            <button onClick={incCount}>Increase Count</button>
        </div>
    );
}
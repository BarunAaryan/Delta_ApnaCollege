import { useState } from "react";

function init(){
    console.log("Init was executed")
    return Math.random();
}

export default function Counter() {
    // let [stateVariable, setStateVariable] = useState(0); 
    let [count, setCount] = useState(init); //used for initialization
    console.log("Component was re-rendered")
console.log(`Count is = ${count}`)
    let incCount = () => {
        // setCount(count + 1);
        // setCount((currCount)=>{
        //     return currCount+ 1;
        // });
        setCount((currCount)=>{
            return currCount+ 1;
        });
        console.log(`Inside incCount, count = ${count}`);
    };
    return (
        <div>
            <h3>Count= {count}</h3>
            <button onClick={incCount}>Increase Count</button>
        </div>
    );
}
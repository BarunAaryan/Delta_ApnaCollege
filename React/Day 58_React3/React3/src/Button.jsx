function handleClick(){
    console.log("Hello!")
};
function handleMouseOver(){
    console.log("Bye!");
};
function handleDblClick(){
    console.log("Double click pressed");
};

export default function Button(){
    return(
<div>
    <button onClick= {handleClick}>Click me !</button>
    <p onMouseOver={handleMouseOver} >This para is for event demo</p>
    <button onDoubleClick= {handleDblClick}>Click Me!</button>
</div>
    );
}
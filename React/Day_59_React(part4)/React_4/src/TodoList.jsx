import { useState } from "react";

export default function TodoList() {

    let [todos,setTodos] = useState(["wow"]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos([...todos,newTodo]);
        setNewTodo("");
    };

    let updateTodoValue = (event)=>{
        setNewTodo(event.target.value);
    };

    return (
        <div>
        <input 
        placeholder="add a task" 
        value={newTodo} 
        onChange={updateTodoValue}>
        </input>
        <button onClick={addNewTask} >add task</button>
        <br /><br /><br /><br /><hr />
        <h4> Task Todo </h4>
        <ul>
            {todos.map((todo) => (
                <li>{todo}</li>
            ))}
    
     </ul>
        </div>
    );
}

import "./App.css";
import Title from "./Title.jsx";
//import

function Description() {
  return <h3>I am the description</h3>;
}  

function App() {
  return (
    <div>
      <h1>This is my app component</h1>
      <p> Inside app component we have: </p>
      <Title />
      <Title />
      <Description/>
    </div>
  );
}

export default App; 

import "./App.css";
import Title from "./Title.jsx";
import ProductTab from "./ProductTab.jsx";
import MsgBox from "./MsgBox";
//import

function Description() {
  return <h3>I am the description</h3>;
}  

function App() {
  return (
    <>
    <h2>Blockbuster deals | Shop Now</h2>
    <ProductTab/>
    </>
  );
}

export default App; 

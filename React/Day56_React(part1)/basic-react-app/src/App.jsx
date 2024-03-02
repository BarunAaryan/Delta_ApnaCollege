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
    <MsgBox userName= "Barun" textColor="yellow" />
    <MsgBox userName= "ApnaCollege" textColor="blue" />
    <ProductTab/>
    </>
  );
}

export default App; 

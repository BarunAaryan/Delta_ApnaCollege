import "./Product.css";
import Price from "./Price"; 

function Product({title, idx}){
   let oldPrices=["12,495", "11,560", "799", "7000"];
   let newPrices=["10,495", "9,560", "599", "4000"];
   let description= [["8000 DPI", "5 Programmable Buttons"],
    ["intutuve surface", "Robust Build quality"],
    ["designed for iPad pro", "Robust build quality"], 
     ["wireless", "strong"]];
    return (
        <div className="Product">
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div> 
    ); 
} 
export default Product;

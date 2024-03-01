import "./Product.css"

function Product({title, price, features}){
    // const list= features.map((feature)=> <li>{feature}</li>)
// console.log(features);
let isDiscount = price > 30000;
let styles= {backgroundColor: isDiscount ? "yellow": ""};
    return (
        <div className="Product" style={styles}>
            <h3>{title}</h3>
            <h5> Price: {price}</h5>
            {price> 30000 ? <p>"5% Discount"</p> :<a href="/">Get Discount</a>}
        </div> 
    ); 
}
export default Product;

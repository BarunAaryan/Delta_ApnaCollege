import "./Product.css"

function Product({title, price, features}){
    // const list= features.map((feature)=> <li>{feature}</li>)
// console.log(features);
    return (
        <div className="Product">
            <h3>{title}</h3>
            <h5> Price: {price}</h5>
            {price> 30000 ? <p>"5% Discount"</p> :<a href="/">Get Discount</a>}
        </div>
    ); 
}
export default Product;

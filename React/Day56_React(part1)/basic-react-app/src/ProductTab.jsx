import Product from "./Product.jsx";
function ProductTab(){
  let options = ["hi-tech","durable", "fast"];
return(
    <>
      <Product title="phone" price={30000} />
      <Product title= "laptop" price={40000}/>
      <Product title="pen" price={20000}/>
    </>
);
}
export default ProductTab;
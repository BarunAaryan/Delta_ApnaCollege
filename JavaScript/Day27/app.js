//Using AXIOS
let btn = document.querySelector("button");
btn.addEventListener("click", async ()=>{
   // console.log("Button was clicked");
   let fact = await getFacts(); //fact is a promise here
   console.log(fact);
   let p = document.querySelector("#result");
   p.innerText = fact;
});


let url = "https://catfact.ninja/fact"

async function getFacts(){
    try{
        let res = await axios.get(url);
        return res.data.fact;
    }catch(e){
        console.log("Error-",e);
        return "No fact Found"
    }
}
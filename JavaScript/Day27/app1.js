//Sending heading with API requests
// const url = "https://icanhazdadjoke.com/";
// async function getJokes(){
//     try{
//         const config= {headers: {Accept: "application/json"}};
//         let res= await axios.get(url, config);
//         console.log(res.data)
//     }catch(err){
// console.log(err);
//     }
// }

//Activity using Query String
let btn= document.querySelector("button");
let url = "http://universities.hipolabs.com/search?name=";
btn.addEventListener("click", async()=>{
    // console.log("button was clicked");
    let country = document.querySelector("input").value;
    console.log(country);
    let colArr = await getCollege(country);
    // console.log(colArr);
    show(colArr);
});
function show(colArr){
    let list = document.querySelector("#list");
    list.innerText= "";
    for(col of colArr){
        console.log(col.name);
        let li= document.createElement("li");
        li.innerText= col.name;
        list.appendChild(li);
    }
}
//let country ="nepal";
async function getCollege(country){
    try{
        let res= await axios.get(url+country);
        return res.data;
    }catch(err){
        console.log("Result not found", err);
        return [];
    }
}

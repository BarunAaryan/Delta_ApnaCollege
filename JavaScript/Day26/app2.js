let url= "https://catfact.ninja/fact";
// fetch(url)
// .then((response)=>{
// //console.log(response);
// //console.log(response.json());
// return response.json();
// })
// .then((data)=>{
// console.log("Data Fact1=",data.fact);
// return fetch(url);
// })
// .then((response)=>{
// return response.json();
// })
// .then((data2)=>{
//     console.log("Data 2 fact",data2.fact);
// })
// .catch((err)=>{
//     console.log("error- ", err);
// })

//using async await
async function getFacts(){
    try{
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);
        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log(data2.fact);
    }
    catch(e){
        console.log("error is ", e)
    }
}


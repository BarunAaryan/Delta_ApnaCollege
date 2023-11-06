let heros= [
    ["ironman", "spiderman", "thor"],
    ["superman", "wonderwomen", "flash"]
]
for(let i=0; i<heros.length; i++){
    console.log(i, heros[i], heros[i].length); 
    for(let j=0; j<heros[i].length; j++){
        console.log(`j=${j}, ${heros[i][j]}`);
    }
}

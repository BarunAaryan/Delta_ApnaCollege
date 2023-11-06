let todo=[];
let req =prompt("Please Enter Your Request");
while(true){
    if(req=="quit"){
        console.log("quitting app");
        break;
    }
    if(req =="list"){
        console.log("-------------");
        for(let i=0; i<todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("-------------");
    }else if(req=="add"){
        prompt("Please enter the task you want to add");
        todo.push(task);
        console.log("task Added");
    }else if(req=="delete"){
        let idx= prompt("Please enter the task index");
        todo.splice(idx, 1);
        console.log("Task deleetd");
    }else{
        console.log("Wrong Request");
    }
    req =prompt("Please Enter Your Request");
}
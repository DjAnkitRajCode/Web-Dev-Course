var todo = [];
var limit = prompt("Length of array");

var input = prompt ("what would you like to do");
function listTodo(){
     console.log("************")
    
    todo.forEach(function(todos,i){
       console.log(i + ":" + todos) 
    });
    console.log("************")
}
function deleteTodo(){
    var index= prompt("Enter index of Todo to delete");
    todo.splice(index,1);
    console.log("delete todo");
}
function addTodo(){
     var newTodo = prompt("Enter new todo");
    todo.push(newTodo);
    console.log("you added "+ newTodo);
}
while(input !== "quit"){
   if (input == "list"){
   listTodo();
}
else if(input == "new"){
    for(j=0;j<limit;j++){
         addTodo();
    }
} 
else if( input == "delete"){
    deleteTodo();
}
else if(input == "clear"){
        for(i=0;i<todo.length;i++){
             todo.splice(i,100);
        }
    console.log("deleted all");
        }
    input = prompt ("what would you like to do");

}
console.log("ok,you quit the App");
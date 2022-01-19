
var number = [];
function addNew(){
    for(i=1;i<=num;i++){
         var input = prompt("Enter new todo");
         number.push(input);
         console.log("you added "+ input);
    }
}
function max(){
    var max = number[0];
    for(var i=1;i<number.length;i++){
        if(number[i]> max){
            max= number[i];
        }
    }
    return max;
}
var store = prompt("what you like to do");

if(store == "new"){
    var num = prompt("number of item in array");
    addNew();
   }
















//var number = [];
//var add = 0;
//function addNew(){
//    for(i=1;i<=num;i++){
//         var input = prompt("Enter new todo");
//         number.push(input);
//         console.log("you added "+ input);
//    }
//}
//function sumArray(){
//    for(var j=1;j<number.length;j++){
//        add = add + number[j];
//    }
//    console.log(add);
//}
//function sumArray(arr){
//    var total = 0;
//    arr.forEach(function(element){
//        total += element;
//    });
//    return total;
//}

//var store = prompt("what you like to do");
//
//if(store == "new"){
//    var num = prompt("number of item in array");
//    addNew();
//   }






//********************************************************************
//check array for same terms
//var number = [];
//function addNew(){
//    for(var i=1;i<=num;i++){
//         var input = prompt("Enter new todo");
//         number.push(input);
//         console.log("you added "+ input);
//    }
//}
//function isUniform(){
//    var first = number[0];
//    for(var j=1;j<number.length;j++){
//        if(number[j] !== first){
//            return false;
//          }
//        }
//    return true;
//    }
//var store = prompt("what you like to do");
//
//if(store == "new"){
//    var num = prompt("number of item in array");
//    addNew();
//   }

//********************************************************************
//Reverse Element  JavaScript
//var number = ["1","2","3","4"];
//var alphabet = ["a","b","c","d"];
//function printReverseNumber(){
//    for(var i=3;i>=0;i--){
//        console.log(number[i])
//    }
//}
//function printReverseAlphabet(){
//    for(var i=3;i>=0;i--){
//        console.log(alphabet[i])
//    }
//}
//
//var input = prompt("input given to print");
//if(input == "num")
//    {
//        printReverseNumber(); 
//    }
//else if(input == "alpha"){
//        printReverseAlphabet();
//        }
//else {
//    alert("invalid");
//}
//********************************************************************
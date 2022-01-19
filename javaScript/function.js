//function even(x){
//    if(x%2==0){
//         return true;
//    }
//   else{
//       return false;
//   }
//}
//function even(x){
//   return x%2==0;
//   
//}
//function factorial(y){
//    var i= 1;
//    var z=1;
//    while(i<=y){
//        z = z * i;
//        i++;
//    }
//    return z;
//}
//it can also be done form for loop

function kababToSnake(str){
     var newStr = str.replace(/-/g , "_");
     return newStr;
}
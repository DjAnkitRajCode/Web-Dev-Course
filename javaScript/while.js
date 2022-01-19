//console.log("PRINTING ALL NUMBER BETWEEN -10 AND 19");
//var i = -10 ;
//while(i<20){
//    console.log(i);
//    i++;
//}
//console.log("PRINTING ALL EVEN NUMBER BETWEEN 10 AND 40");
//var e = 10;
//while(e<=40){
//      console.log(e);
//      e+=2;
//      }
//console.log("PRINTING ALL ODD NUMBER BETWEEN 300 AND 333");
//var o = 300;
//while(o<=333){
//    if(o%2===1)
//      console.log(o);
//      o++;
//      }
//console.log("PRINTING ALL NUMBER DIVIDE BY 5 & 3");
//var g = 5;
//while(g<=50){
//      if((g%5==0)&&(g%3==0)){
//        console.log(g)
//        }
//        g++;
//      }

//var answer =prompt("are we there yet?");
//while(answer !== "yes" && answer !== "yay"){
//    var answer=prompt("are we there yet?");
//}
//alert("YAY,we made it!");

var answer =prompt("are we there yet?");
while(answer.indexOf("yes")== -1){
    var answer=prompt("are we there yet?");
}
alert("YAY,we made it!");




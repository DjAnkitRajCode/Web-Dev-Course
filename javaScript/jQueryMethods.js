//$("button").click(function(){
//   alert("button has been clicked");
//});
$("#pari").click(function(){
    $("body").css("background","pink");
});
$(".select").click(function(){
    $("body").css("background","red");
});
$(".select1").click(function(){
    $("body").css("background","blue");
});

$("input").keypress(function(event){
   if(event.which == 13){
       alert("enter");
   } 
});


$(".delete").on("click",function(){
    $(this).parent().fadeOut(1000,function(){
       $("#undo").fadeIn(1000);  
    });
});

$("#undo").on("click",function(){
    $("div").fadeIn(1000,function(){
        $(this).add();
    })
    $(this).fadeOut();
});
































//$("div").css("backgroundColor","purple");
//$(".highlight").css("width","200px");
//$("#third").css("border","2px solid black");
//$("div:first").css("color","yellow");
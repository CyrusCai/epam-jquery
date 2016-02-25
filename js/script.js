// Note that the following is a shorthand for the DOMReady event
$(function() {

});

$("#prepend button").click(function() {
	$("#prepend p").prepend("Yo! ");
});

$("#before button").click(function() {
   $("#before p").before("Before Hello! ");
});

$("#css1 button").click(function() {
  $("#css1 p").css("font-size","40px");
});

$("#css2 button").click(function() {
  $("#css2 p").css({"color":"red","font-size":"35px"});
});

$("#attr1 button").click(function() {
  var  href = $("#attr1 a").attr("href");
  console.log(href);
  $("#attr1 p").after(href);
});

$("#attr2 button").click(function() {
   var  href = $("#attr2 a").attr("href","http://www.google.com.hk");
});

$("#class1 button").click(function() {
  $("#class1 p").addClass("bg-primary");
});

$("#class2 button").click(function() {
  if($("#class2 p").hasClass("lead")){
    alert("Element p  has the lead class applied to it");
  }
});

$("#form1 button").click(function() {
  console.log("val: "+$("#form1 input").val());
});

$("#form2 button").click(function() {
  $("#form2 input").val("Value");
    console.log("New value: "+$("#form2 input").val());

});

// handle the mouseover event here
$("#mouse img").mouseover(function(event){
  $("#mouse img").css("width","50%");
});
$("#mouse img").mouseout(function(event){
  $("#mouse img").css("width","20%");
});
// handle the form events here

$("#formEvents form").submit(function(event) {
  console.log($("#inputEmail3").val());
  console.log($("#inputPassword3").val());
  console.log($(".form-horizontal input[type=checkbox]").prop("checked"));
  event.preventDefault();
});

/*
* handle animation event
*/
//mouseover
$("#animate1 img").mouseover(function(event){
  $("#animate1 img").animate({
    width:"70%",
  },400,function(){

  })
});
$("#animate1 img").mouseout(function(event){
  $("#animate1 img").animate({
    width:"20%",
  },400,function(){

  })
});

//dbclick
var ani2Img = $("#animate2 img");
ani2Img.dblclick(function(event){
  if(ani2Img.css("margin-left") == "100px"){
    ani2Img.animate({
      "margin-left":"0px",
    },300,"swing");
  }else{
    ani2Img.animate({
      "margin-left":"100px",
    },300,"swing");
  }
});

//fade
var ani3Img = $("#animate3 img");
ani3Img.click(function(){
  ani3Img.fadeOut("slow",function(){
    ani3Img.animate(function(){    },1000,function(){
     ani3Img.attr("src","https://placekitten.com/101/101");
     ani3Img.fadeIn("slow",function(){
      ani3Img.animate(function(){
      },1000,"swing");
    });
   });
  });

});
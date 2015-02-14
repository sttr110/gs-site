$(function(){
  $("#toggle").click(function(){
    $("#menu").slideToggle();
    return false;
  });
  $("li").click(function(){
    $("#menu").hide();
  })
});
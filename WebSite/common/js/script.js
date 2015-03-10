$(function(){
  //smart menu
  $("#toggle").click(function(){
    $("#menu").slideToggle();
    return false;
  });
  $("li").click(function(){
    $("#menu").hide();
  })

  //load more smart contents
  $('#aboutMoreLoad').click(function(){
    $('.hideAbout').slideToggle(1500);
  })
  $('#howtoMoreLoad').click(function(){
    $('.hideHowto').slideToggle(1500);
  })
  $('#compareMoreLoad').click(function(){
    $('.hideCompare').slideToggle(1500);
  })
  $('#iventMoreLoad').click(function(){
    $('.hideIvent').slideToggle(1500);
  })
  $('#registerMoreLoad').click(function(){
    $('.hideRegister').slideToggle(1500);
  })
});
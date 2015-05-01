$(function(){
  $("body").bind("blur focus focusin focusout load resize scroll unload click " +
      "dblclick mousedown mouseup mousemove mouseover mouseout mouseenter " + 
       "mouseleave change select submit keydown keypress keyup error", function(e){
      console.log( e.type + ' is bullshit!')
  });
});

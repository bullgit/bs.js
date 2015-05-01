# bs.js
Everything is bullshit. 

## What

This sends awesome events to your console.

## Usage

Add this to your html

```html
<script src="//code.jquery.com/jquery-1.11.2.min.js"></script>

<script>
$("body").bind("blur focus focusin focusout load resize scroll unload click " +
    "dblclick mousedown mouseup mousemove mouseover mouseout mouseenter " + 
     "mouseleave change select submit keydown keypress keyup error", function(e){
    console.log( e.type + ' is bullshit!')
});
</script>
```

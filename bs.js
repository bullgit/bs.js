(function() {
	var addListener = function(type) {
		window.addEventListener(type, function(e) {
			console.log(e.type + ' is bullshit!')
		});
	}
	var events = ["blur", "focus", "focusin", "focusout", "load", "resize", "scroll", "unload", "click", "dblclick", "mousedown", "mouseup", "mousemove", "mouseover", "mouseout", "mouseenter", "mouseleave", "change", "select", "submit", "keydown", "keypress", "keyup", "error"];
	for (var i in events) {
		addListener(events[i]);
	}
})();

/**
 * 
 */
(function(){
	//var txtbox = document.getElementById("txtInput");
	
	var mouseHandler = function(evt) {
		var target = eventUtility.getTarget(evt),
		classData = target.getAttribute("data-body-class");
		
		if(classData) {
			eventUtility.preventDefault(evt);
			
			if(evt.type === "mouseover") {
				document.body.className = "default";
			} else {
				document.body.className = classData;
			}
		}
	};
	
	eventUtility.addEvent(document,"click", mouseHandler);
	eventUtility.addEvent(document,"mouseover", mouseHandler);
	
	/*
	var buttons = document.getElementsByTagName("button");
	
	var buttonClick = function(evt) {
		//alert("This works");
		
		var target = eventUtility.getTarget(evt),
		className = target.innerHTML.toLowerCase();
		
		eventUtility.preventDefault(evt);
		
		document.body.className = className;
	}
	
	for (var i = 0, len = buttons.length; i < len; ++i) {
		eventUtility.addEvent(buttons[i],"click", buttonClick);
		
	}*/
}());
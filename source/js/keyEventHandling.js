/**
 * 
 */
(function(){
	var txtbox = document.getElementById("txtInput");
	
	eventUtility.addEvent(txtbox,"keypress",
			function(evt){
				var code = eventUtility.getCharCode(evt);
				
				if((code >= 65 && code <= 90) ||
					(code >= 97 && code <= 122)) {
					
				} else {
					eventUtility.preventDefault(evt);
				}
				
				//alert(code);
	});
	
	eventUtility.addEvent(document,"keydown",
			function(evt){
				var code = evt.keyCode,
					ctrlKey = evt.ctrlKey;
				
				if (ctrlKey && code === 66) {
					alert("You pressed ctrl+B");
				}
	});
}());
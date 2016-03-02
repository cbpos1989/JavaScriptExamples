/**
 * 
 */
(function() {

	var form = document.getElementById("theForm");
		button = form.myButton;
		textbox = form.myTextbox;
		textarea = form.myTextArea;
		select = form.dayOfWeek;
	
		eventUtility.addEvent(form, "submit", function(evt) {
			eventUtility.preventDefault(evt);
		});
		
		eventUtility.addEvent(button, "click", function(evt){
			var target = eventUtility.getTarget(evt);
			
			if(textbox.value === "") {
				alert("please input data in box");
				textbox.focus();
			} else {
				textarea.disabled = true;
				textarea.value = textbox.value;
			}
			
			if (typeof select.selectedOptions != "undefined") {
				var option = select.selectedOptions[0];
			} else {
				var index = select.selectedIndex;
				var option = select.options[index];
			}
			
			alert(option.value);
		});

}());
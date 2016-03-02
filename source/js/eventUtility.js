/**
 * 
 */
var eventUtility = {
	addEvent : function(el,type, fn) {
		if(typeof addEeventListener !== "undefined") {
			el.addEventListner(type, fn, false);
		} else if (typeof attachEvent !== "undefined") {
			el.attachEvent("on" + type, fn);
		} else {
			el["on" + type] = fn;
		}
	},
	
	removeEvent : function(el,type, fn) {
		if(typeof removeEeventListener !== "undefined") {
			el.removeEventListner(type, fn, false);
		} else if (typeof detachEvent !== "undefined") {
			el.detachEvent("on" + type, fn);
		} else {
			el["on" + type] = null;
		}
	},
	
	getTarget : function(event) {
		if(typeof event.target !== "undefined") {
			return event.target;
		} else {
			return event.srcElement;
		}
	},
	
	preventDefault : function(event) {
		if(typeof event.preventDefault !== "undefined") {
			event.preventDefault();
		} else {
			event.returnValue;
		}
	},
	
	getCharCode : function(event) {
		if(typeof event.charCode === "number") {
			return event.charCode;
		} else {
			return event.keyCode;
		}
	}
};
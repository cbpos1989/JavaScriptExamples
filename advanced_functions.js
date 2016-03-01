/**
 * 
 */
listArguments("Hello World","Javascript","Coding");

function listArguments(){
	var length = arguments.length;
  var output = " ";
  
  for(i = 0; i < length; i++) {
  	output += "Argument " + (i + 1)  + " = " + arguments[i] + "\n";
    
 }
  
	alert("Function Declartion with " + length + " argument(s)\n" + output);
}

var doSomethingElse = function(){
	alert("Function Expression")
};

function otherFunction(args1) {
	return function(){
  	alert(args1);
  };
}

var fn = otherFunction("Closure!");

fn();

fn = null;

/**
* Learning how to use the different methods of Arrays
*
**/
var fruit = ["apples", "oranges", "bananas", "grapes", "strawberries"];

function startsWithG(value, index, array) {
  return value[0].toLowerCase() === "g";
}

function isLengthOf(value, index, array) {
	return value.length === 6;
}

function startsWithAB(value, index, array) {
	return value[0].toLowerCase() === "a" || value[0].toLowerCase() === "b"
}

function alertValue(value,index,array) {
	alert(value);
}

function changeValue(value, index, array){
	return "fresh " + value ;
}

var result1 = fruit.some(startsWithG),
result2 = fruit.every(isLengthOf),
result3 = fruit.filter(startsWithAB),
result4 = result3.map(changeValue);

alert("Array = " + fruit + "\nresult1 = " + result1 + "\nresult2 = " + result2 + "\nresult3 = " + result3);

result4.forEach(alertValue);

var calculator = {
  calculate: function(x, y, fn) {
    return fn(x, y);
  }
};

var sum = function(x, y) {
    return x + y;
  },
  diff = function(x, y) {
    return x - y;
  };
  
//Calling a function that accepts another function as a parameter
var sumResult = calculator.calculate(1, 2, sum),
  diffResult = calculator.calculate(1, 2, diff);

alert(sumResult);
alert(diffResult);
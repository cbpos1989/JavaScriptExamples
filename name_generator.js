var nameUtility = (function() {
  var i = 0;

  return {
    nameGen: function() {
      var name = "customName" + i;
      i += 1;
      return name;
    }
  }
}());

var name1 = nameUtility.nameGen();
name2 = nameUtility.nameGen();

alert(name1 + " " + name2);
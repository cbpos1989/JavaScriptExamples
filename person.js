var Person = function(firstName, lastName) {
  //Note needed once new Keyword is used
  if (this === window) {
    return new Person(firstName, lastName);
  }

  this.firstName = firstName;
  this.lastName = lastName;
}

//Prototype method that will be shared by all Person objects saving this method being duplicated for multiple Person Object creations
Person.prototype.getFullName = function() {
  return this.firstName + " " + this.lastName;
};

Person.prototype.greet = function(person) {
  if (person instanceof Person) {
    return "Hello " + person.getFullName();
  } else {
    return "Hello, there!";
  }
};



var person1 = new Person("John", "Doe"),
  person2 = new Person("Jane", "Doe");

alert(person1.greet(person2));
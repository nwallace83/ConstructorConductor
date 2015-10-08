//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

var Person = function(name, age) {
	this.name = name;
	this.age = age;
}

  //code here


//Now create three instances of Person with data you make up

var me = new Person('Nathan', 32);


//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  //code here

Person.prototype.sayName = function() {
	console.log(this.name);
}

me.sayName();
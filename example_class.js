var Person = function(firstname, lastname){
	this.firstname = firstname;
	this.lastname = lastname;
}

Person.prototype.getFullName = function(){
	console.log(this.firstname +" "+ this.lastname);
}

Person.prototype.setAge = function(age){
	this.age = age;
}

Person.prototype.getAge = function(){
	if(this.hasOwnProperty('age')){
		console.log(this.firstname +"'s age is: " + this.age)
	}else{
		console.log(this.firstname +"'s age is unknown");
	}
}


var chethan = new Person('chethan', 'c');
chethan.getFullName();
chethan.getAge();
chethan.setAge(25);
chethan.getAge();


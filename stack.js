//Object creation
var stack = function(){
	this.storage = '';
}


//Push method to put the data at the end of the data structure
stack.prototype.push = function(data){
	if(this.storage !== ''){
		this.storage = this.storage + '-' + data;
	}else{
		this.storage = data;
	}
}


//Pop method to remove the data out of the data structure
stack.prototype.pop = function(){
	if(this.storage.lastIndexOf('-') > 0){
		var popItem = this.storage.substring(this.storage.lastIndexOf('-')+1, this.storage.length);
		this.storage = this.storage.substring(0, this.storage.lastIndexOf('-'));
		return popItem;
	}else if(this.storage.length > 0){
		return this.storage;
	}
	return '';
}

//get the size of the data structure
stack.prototype.size = function(){
	var string = this.storage.split('-');
	return string.length;
}

stack.prototype.getStack = function(){
	console.log(this.storage);
}

var s = new stack();
s.push('chethan');
s.push('wonder');
s.push('eater');
s.getStack();
console.log(s.pop());
console.log(s.pop());
console.log(s.pop());

var MinStack = function(){
	this.storage = {};
	this.count = 0;
	this.minStack = [];
}


MinStack.prototype.push = function(val){
	this.storage[this.count] = val;
	if(this.peek() === undefined){
		this.minStack.push(val);	
	}else if(this.peek() < val){
		this.minStack.push(this.peek());
	}else{
		this.minStack.push(val);
	}
	this.count++;
}

MinStack.prototype.pop = function(){
	if(this.minStack.length > 0){
		var lRet = this.minStack.pop();
		delete this.storage[this.count-1];
		this.count--;
		return lRet;
	}else{
		return 'Empty Min Stack';
	}
}

MinStack.prototype.peek = function(){
	return this.minStack[this.count-1];
}

MinStack.prototype.getSize = function(){
	return this.count;
}

MinStack.prototype.getMin = function(){
	return this.peek();
}

MinStack.prototype.logStack = function(){
	console.log('------------');
	console.log('min stack no of elements: ' + this.getSize());
	console.log('Minimum of the stack is: '+ this.getMin());
	console.log('The elements of the Stacks are: ');
	console.log(this.storage);
}

var mStack = new MinStack();

mStack.push(5);
mStack.push(29);
mStack.push(35);
mStack.push(4);
mStack.push(6);
mStack.push(2);
mStack.logStack();
mStack.pop();
mStack.logStack();
mStack.pop();
mStack.logStack();


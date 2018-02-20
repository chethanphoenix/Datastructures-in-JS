var Stack = function(){
	this.storage = {};
	this.minStorage = {};
	this.count = 0;
}

Stack.prototype.push = function(val){
	this.storage[this.count] = val;
	this.minStorage[this.count] = val;
	if(this.count>=1){
		this.updateMin(this.count);
	}
	this.count++;
}

Stack.prototype.updateMin = function(index){
	if(index<1){
		return;
	}else if(this.minStorage[index-1] < this.minStorage[index]){
		var tmp = this.minStorage[index];
		this.minStorage[index] = this.minStorage[index-1];
		this.minStorage[index-1] = tmp;
		this.updateMin(index-1);
	}else{
		return;
	}
}

Stack.prototype.deleteFromMinStorage = function(delEle){
	var i, j;
	for(i=this.count; i>=0; i--){
		if(this.minStorage[i]=== delEle){
			delete this.minStorage[i];
			break;
		}
	}
	for(j=i; j<this.count; j++){
		this.minStorage[j]=this.minStorage[j+1];
	}
	delete this.minStorage[this.count];
}

Stack.prototype.pop = function(){
	if(this.count-- >= 0){
		var lRet = this.storage[this.count];
		delete this.storage[this.count];
		this.deleteFromMinStorage(lRet);
		return lRet;
	}else{
		return 'empty array';
	}
}

Stack.prototype.size = function(){
	return this.count;
}

Stack.prototype.getMin = function(){
	return this.minStorage[this.count];
}

Stack.prototype.logStackPop = function(val){
	console.log('---------');
	console.log('Poped: ' + val);
	console.log('Storage: ');
	console.log(this.storage);
	console.log('Min Storage: ');
	console.log(this.minStorage);
	
}

var stack = new Stack();
stack.push(6);
stack.push(3);
stack.push(5);
stack.push(2);
stack.push(8);

stack.logStackPop(stack.pop());
stack.logStackPop(stack.pop());
stack.push(7);
stack.logStackPop(stack.pop());

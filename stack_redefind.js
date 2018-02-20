var Stack = function(){
        this.storage = '';
}

Stack.prototype.push = function(val){
        this.storage = this.storage.concat("***", val);
}

Stack.prototype.pop = function(){
        var returnValue = this.storage.slice(this.storage.lastIndexOf('***')+3);
        this.storage = this.storage.substring(0, this.storage.lastIndexOf('***'));
        return returnValue;
}

Stack.prototype.size = function(){
        return this.storage.split('***').length-1;
}


var stack = new Stack();
stack.push('chethan');
stack.push('hampe');
stack.push('apsarakonda');

console.log(stack.pop());
console.log(stack.size());
console.log(stack.pop());
console.log(stack.pop());

console.log(stack.size());

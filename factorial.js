var factorial = function(n){
	console.log(n);
	if(n===1 || n===0){
		return 1;
	}
	else {
		return n*factorial(n-1)
	}
}
var ele = 8;
var fact = factorial(ele);
console.log('factorial of ' +ele+ 'is: ' + fact);

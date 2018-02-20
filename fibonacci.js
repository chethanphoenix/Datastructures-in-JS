var fib_creator = function(no_of_ele){
	var num = 2;
	var temp;
	var n1 = 0;
	var n2 = 1;
	console.log(n1);
	console.log(n2);
	function fibonacci(n1, n2){
		console.log(n1+n2);
		num++;
		if(num === no_of_ele){
			return;
		}else{
			fibonacci(n2, n1+n2);
		}
	}
	fibonacci(n1, n2);
}

fib_creator(10);

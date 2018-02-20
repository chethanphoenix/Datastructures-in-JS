var arrayMultiplier = function(array, mul){
	function recurseMultiply(index){
		array[index++] *= mul
		if(index === array.length){
			return;
		}else{
			recurseMultiply(index);	
		}
	}
	recurseMultiply(0);
}

var array = [10, 9, 4, 3, 8, 4, 2, 1];
var ele = 6;
console.log(array+' * '+ 6);
arrayMultiplier(array, ele);
console.log(array);

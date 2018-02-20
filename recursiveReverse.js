var reverseArray = function(array){
	var rArray = [];
	var len = array.length;
	var reverse = function(index){
		rArray[index++] = array[len-index];
		if(array.length === index){
			return;
		}else{
			reverse(index);
		}
	}	
	reverse(0);
	return rArray;	
}

var arr = [5, 4, 3, 2, 1];
console.log('Original Array: '+ arr);
console.log(reverseArray(arr));

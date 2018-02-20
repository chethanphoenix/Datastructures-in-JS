var Sorting = function(){
	this.arr = [5, 2, 4, 7, 8, 1, 9];
}

Sorting.prototype.selectionSort = function(arr){
	var i, j, small, pos;
	for(i = 0; i < arr.length-1; i++){
		small = arr[i];
		pos = i;
		for(j = i+1; j < arr.length; j++)
		{
			if(small > arr[j]){
				small = arr[j];
				pos = j;
			}			
		}
		arr[pos] = arr[i];
		arr[i] = small;
	}
	return arr;
}

Sorting.prototype.bubbleSort = function(arr){
	var i, j;
	var temp;
	for(i=0; i<arr.length; i++){
		for(j=0; j<arr.length-i; j++){
			if(arr[j] > arr[j+1]){
				temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
			}
		}
	}
	return arr;
}

Sorting.prototype.insertionSort = function(arr){
	var i, j, temp;
	for(i=0; i<arr.length-1; i++){
		for(j=i+1; j>0; j--){
			if(arr[j]<arr[j-1]){
				temp = arr[j];
				arr[j] = arr[j-1];
				arr[j-1] = temp;
			}
		}
	}
	return arr;
}

var sort = new Sorting();
console.log(sort.selectionSort(sort.arr.slice()));
console.log(sort.bubbleSort(sort.arr.slice()));
console.log(sort.insertionSort(sort.arr.slice()));

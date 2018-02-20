var Searching = function(){
	this.arr = [5, 2, 3, 2, 9, 10, 8];
	this.sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
}

Searching.prototype.foundLog = function(ele, index){
	console.log('The element '+ ele +' was found at the index ' + index);
}

/*
Linear search traverses the array linearly from the start of the array till 
the end of it or till it finds the element that it was found
*/
Searching.prototype.linearSearch = function(ele){
	var i;
	for(i = 0; i < this.arr.length; i++){
		if(this.arr[i]===ele){
			return i;
		}
	}
	return undefined;
}

/*
Binary search is type of a search that requires the 
array in which the search has to be carried on to 
be sorted
*/
Searching.prototype.binarySearch = function(ele){
	var low = 0;
	var high = this.sortedArray.length - 1;
	var mid;
	while(low <= high){
		mid = Math.floor((low+high)/2);
		if (ele === this.sortedArray[mid]){
			return mid;
		}else if(ele < this.sortedArray[mid]){
			high = mid - 1;
		}else{
			low = mid + 1;
		}
	}
	return undefined;
}

var search = new Searching();
var ele = 7;
console.log(search.arr)
search.foundLog(ele, search.linearSearch(ele));
console.log(search.sortedArray);
search.foundLog(ele, search.binarySearch(ele));

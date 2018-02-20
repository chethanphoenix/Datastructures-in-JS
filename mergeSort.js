var Merge = function(array){
	return MergeSort(array);	
}

var MergeSort = function(arr){
	var mid, left = [], right = [];
	var i = 0, j = 0;
	if(arr.length > 2){
		mid = Math.floor(arr.length/2);
		left = MergeSort(arr.slice(0, mid));
		right = MergeSort(arr.slice(mid, arr.length));
	}else if(arr.length == 2){
		if(arr[0] > arr[1]){
			mid = arr[0];
			arr[0] = arr[1];
			arr[1] = mid;
		}
		return arr;
	}else if(arr.length == 1){
		return arr;
	}
	var out_arr = [];
	var main_ine = 0;
	while(i < left.length || j < right.length){
		if(left[i] < right[j]){
			out_arr[main_ine++] = left[i++];				
		}else{
			out_arr[main_ine++] = right[j++];
		}
	}
	
	while(i<left.length){
		out_arr[main_ine++] = left[i++];
	}
	
	while(j<right.length){
		out_arr[main_ine++] = right[j++];
	}
	return out_arr;
}

arr = [4, 6, 5, 3, 6, 7, 8];
console.log(Merge(arr));

var qSort = function(arr, sIndex, eIndex){
	var tmps;
	var pivot = arr[eIndex];
	var wall = sIndex;
	if(sIndex > eIndex){
		return;
	}
	for(var i = sIndex; i < eIndex; i++){
		if(arr[i]<pivot){
			tmp = arr[wall];
			arr[wall] = arr[i];
			arr[i] = tmp;
			wall++;
		}
	}
	arr[eIndex] = arr[wall];
	arr[wall] = pivot;
	qSort(arr, sIndex, wall-1);
	qSort(arr, wall+1, eIndex);
	return;	
}


arr = [94, 76, 20, 39, 43, 8, 37, 10, 79, 83, 84, 16, 34, 99, 6, 24, 19, 56, 66, 60];
console.log(arr);
qSort(arr, 0, arr.length-1);
console.log(arr);


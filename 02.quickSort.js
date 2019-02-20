// Easy, use another memory.
const quickSort = (arr) => {
	if (arr.length <= 1)
		return arr;
	let base = arr[0];
	let left = [];
	let right = [];
	for (let i = 1; i < arr.length; i++)
		arr[i] < base ? left.push(arr[i]) : right.push(arr[i]);
	return [...quickSort(left), base, ...quickSort(right)];
}

var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(quickSort(arr));
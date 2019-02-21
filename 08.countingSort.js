const countingSort = (arr) => {
    let temp = [];
    let result = [];
    for(let i = 0; i < arr.length; i++)
        temp[arr[i]] = temp[arr[i]] ? temp[arr[i]] + 1 : 1;
    for(let j = 0; j < temp.length; j++) {
        let len = temp[j];
        for(let k = 0; k < len; k++)
            result = [...result, j];
    }
    return result;
};

var arr = [2, 2, 3, 8, 7, 1, 2, 2, 2, 7, 3, 9, 8, 2, 1, 4, 2, 4, 6, 9, 2];
console.log(countingSort(arr)); 
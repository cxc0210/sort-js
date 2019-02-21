const insertSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        j = i - 1;
        while (arr[j] > current) {
            arr[j + 1] = arr[j];
            j--
        }
        arr[j + 1] = current;
    }
    return arr;
}

var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(insertSort(arr));
function sort (arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i; j >= 0; j--) {
            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = tmp
            }
        }
    }
}
const codigo = {
    "burbuja":`function burbuja(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                let aux = arr[i]
                arr[i] = arr[j]
                arr[j] = aux
            }
        }
    }
}`,

    "quick": `function partition(start, end, array) {
    let pivot_index = start
    let pivot = array[pivot_index]
    while (start < end) {
        while (start < array.length && array[start] <= pivot) {
            start += 1
        }
        while (array[end] > pivot) {
            end -= 1
        }
        if (start < end) {
            let aux = array[start]
            array[start] = array[end]
            array[end] = aux
        }
    }
    let aux = arr[end]
    array[end] = array[pivot_index]
    array[pivot_index] = aux
    return end
}
    
function quick_sort(start, end, array) {
    if (start < end) {
        let p = partition(start, end, array)
        quick_sort(start, p - 1, array),
        quick_sort(p + 1, end, array)
    }
}`,

    "merge": `function mergeArray(start, end) {
    let mid = parseInt((start + end) >> 1);
    let start1 = start, start2 = mid + 1
    let end1 = mid, end2 = end
    let index = start
    
    while (start1 <= end1 && start2 <= end2) {
        if (arr[start1] <= arr[start2]) {
            itmd[index] = arr[start1]
            index = index + 1
            start1 = start1 + 1;
        }
        else if (arr[start1] > arr[start2]) {
            itmd[index] = arr[start2]
            index = index + 1
            start2 = start2 + 1;
        }
    }
    while (start1 <= end1) {
        itmd[index] = arr[start1]
        index = index + 1
        start1 = start1 + 1;
    }
    while (start2 <= end2) {
        itmd[index] = arr[start2]
        index = index + 1
        start2 = start2 + 1;
    }
    index = start
    while (index <= end) {
        arr[index] = itmd[index];
        index++;
    }
}
    
function mergeSort(start, end) {
    if (start < end) {
        let mid = parseInt((start + end) >> 1)
        mergeSort(start, mid)
        mergeSort(mid + 1, end)
        mergeArray(start, end)
    }
}`,

    "heap": `function maxHeapify(arr, n, i) {
    let largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;
    if (l < n && arr[l] > arr[largest]) {
        largest = l;
    }
    if (r < n && arr[r] > arr[largest]) {
        largest = r;
    }
    if (largest !== i) {
        let temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;
        maxHeapify(arr, n, largest);
    }
}

function heapSort(arr, n) {
    for (let i = parseInt(n / 2 - 1); i >= 0; i--) {
        maxHeapify(arr, n, i);
    }
    for (let i = n - 1; i >= 0; i--) {
        let temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        maxHeapify(arr, i, 0);
    }
}`,


    "comb": `function combSort(array) {
    let interval = Math.floor(array.length / 1.3);
    while (interval > 0) {
        for (let i = 0; i + interval < array.length; i += 1) {
            if (array[i] > array[i + interval]) {
                let small = array[i + interval];
                array[i + interval] = array[i];
                array[i] = small;
            }
        }
        interval = Math.floor(interval / 1.3);
    }
    return array;
}`

}

export default codigo
let arr = [], itmd = []

function shuffle(array) {
    var currentIndex = array.length, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}

function crearArreglo() {
    const arr = []
    const slider = document.getElementById('slider')
    for (let i = 0; i < slider.value; i++) {
        arr.push(i + 1)
    }
    return shuffle(arr)
}

function rectangulo(ctx, x, total, num, color) {
    ctx.fillStyle = color;    // color of fill
    let ancho = 800 / total
    let alto = 800 * num / total
    ctx.fillRect(x * ancho, 0, ancho, alto);
}

function dibujar(ctx, arr) {
    for (let i = 0; i < arr.length; i++) {
        rectangulo(ctx, i, arr.length, arr[i], '#3e8090')
    }
}

function sleep(ms) {
    return new Promise(resolve => {
        const time = setTimeout(resolve, ms)
        return time
    });
}

//BURBUJA
async function burbuja(c, ctx) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            ctx.clearRect(0, 0, c.width, c.height)
            dibujar(ctx, arr)
            rectangulo(ctx, i, arr.length, arr[i], '#BD1616')
            rectangulo(ctx, j, arr.length, arr[j], '#BD1616')
            if (arr[j] < arr[i]) {
                let aux = arr[i]
                arr[i] = arr[j]
                arr[j] = aux
                let time = await sleep(1)
                clearTimeout(time)
            }
        }
    }
    dibujar(ctx, arr)
}
//BURBUJA

//QUICK SORT
async function partition(start, end, array) {
    const c = document.getElementById("canvas")
    const ctx = c.getContext("2d")
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
            //array[start], array[end] = array[end], array[start]
            let aux = array[start]
            array[start] = array[end]
            array[end] = aux
            let time = await sleep(1)
            clearTimeout(time)
        }
        ctx.clearRect(0, 0, c.width, c.height)
        dibujar(ctx, arr)
        rectangulo(ctx, pivot, arr.length, arr[pivot], '#BD1616')
        rectangulo(ctx, start, arr.length, arr[start], '#BD1616')
        rectangulo(ctx, end, arr.length, arr[end], '#BD1616')
    }
    //array[end], array[pivot_index] = array[pivot_index], array[end]
    let aux = arr[end]
    array[end] = array[pivot_index]
    array[pivot_index] = aux
    let time = await sleep(1)
    clearTimeout(time)
    return end
}

async function quick_sort(c, ctx, start, end, array) {
    if (start < end) {
        let p = await partition(start, end, array)
        await Promise.all(
            [
                quick_sort(c, ctx, start, p - 1, array),
                quick_sort(c, ctx, p + 1, end, array)
            ]
        )
    }
    ctx.clearRect(0, 0, c.width, c.height)
    dibujar(ctx, arr)
}
//QUICK SORT

//MERGE SORT
function mergeArray(start, end) {
    const c = document.getElementById("canvas")
    const ctx = c.getContext("2d")
    let mid = parseInt((start + end) >> 1);
    let start1 = start, start2 = mid + 1
    let end1 = mid, end2 = end

    // Initial index of merged subarray
    let index = start

    while (start1 <= end1 && start2 <= end2) {
        if (arr[start1] <= arr[start2]) {
            itmd[index] = arr[start1]
            index = index + 1
            start1 = start1 + 1;
            rectangulo(ctx, start1, arr.length, arr[start1], '#BD1616')
            rectangulo(ctx, index, arr.length, arr[index], '#BD1616')
        }
        else if (arr[start1] > arr[start2]) {
            itmd[index] = arr[start2]
            index = index + 1
            start2 = start2 + 1;
            rectangulo(ctx, start2, arr.length, arr[start2], '#BD1616')
            rectangulo(ctx, index, arr.length, arr[index], '#BD1616')
        }
    }

    // Copy the remaining elements of
    // arr[], if there are any
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

async function mergeSort(start, end) {
    const c = document.getElementById("canvas")
    const ctx = c.getContext("2d")
    if (start < end) {
        let mid = parseInt((start + end) >> 1)
        await mergeSort(start, mid)
        await mergeSort(mid + 1, end)
        await mergeArray(start, end)

        let time = await sleep(1)
        clearTimeout(time)
    }
    ctx.clearRect(0, 0, c.width, c.height)
    dibujar(ctx, arr)
}
//MERGE SORT

//HEAP SORT
async function maxHeapify(arr, n, i) {
    const c = document.getElementById("canvas")
    const ctx = c.getContext("2d")
    let largest = i;
    let l = 2 * i + 1; //left child index
    let r = 2 * i + 2; //right child index
    //If left child is smaller than root
    if (l < n && arr[l] > arr[largest]) {
        largest = l;
    }

    // If right child is smaller than smallest so far 
    if (r < n && arr[r] > arr[largest]) {
        largest = r;
        let time = await sleep(1)
        clearTimeout(time)
    }

    // If smallest is not root 
    if (largest !== i) {
        let temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;
        await maxHeapify(arr, n, largest);
    }
    ctx.clearRect(0, 0, c.width, c.height)
    dibujar(ctx, arr)
}

// main function to do heap sort 
async function heapSort(arr, n) {
    const c = document.getElementById("canvas")
    const ctx = c.getContext("2d")
    // Build heap (rearrange array) 
    for (let i = parseInt(n / 2 - 1); i >= 0; i--) {
        await maxHeapify(arr, n, i);
    }

    // One by one extract an element from heap 
    for (let i = n - 1; i >= 0; i--) {
        // Move current root to end 
        let temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        rectangulo(ctx, i, arr.length, arr[i], '#BD1616')
        rectangulo(ctx, 0, arr.length, arr[0], '#BD1616')
        // call max heapify on the reduced heap 
        await maxHeapify(arr, i, 0);
    }
    dibujar(ctx, arr)
}
//HEAP SORT

//COMB SORT
async function combSort(array) {
    const c = document.getElementById("canvas")
    const ctx = c.getContext("2d")
    let interval = Math.floor(array.length / 1.3);
    while (interval > 0) {
        for (let i = 0; i + interval < array.length; i += 1) {
            ctx.clearRect(0, 0, c.width, c.height)
            dibujar(ctx, arr)
            if (array[i] > array[i + interval]) {
                let small = array[i + interval];
                array[i + interval] = array[i];
                array[i] = small;
                rectangulo(ctx, i + interval, arr.length, arr[i + interval], '#BD1616')
                rectangulo(ctx, i, arr.length, arr[i], '#BD1616')
                let time = await  sleep(1)
                clearTimeout(time)
            }
        }
        interval = Math.floor(interval / 1.3);
    }
    dibujar(ctx, arr)
    return array;
}
//COMB SORT

export function desordenar() {
    const c = document.getElementById("canvas")
    const ctx = c.getContext("2d")
    arr = crearArreglo()
    ctx.clearRect(0, 0, c.width, c.height)
    dibujar(ctx, arr)
}

export async function ordenar() {
    const c = document.getElementById("canvas")
    const ctx = c.getContext("2d")
    const select = document.getElementById('algoritmos')
    if (select.value === 'burbuja') {
        burbuja(c, ctx)
    }
    else if (select.value === 'quick') {
        quick_sort(c, ctx, 0, arr.length - 1, arr)
    } else if (select.value === 'merge') {
        itmd = []
        for (var i = 0; i < arr.length; i++) {
            itmd.push(0)
        }
        await mergeSort(0, arr.length - 1)
        dibujar(ctx, arr)
    } else if (select.value === 'heap') {
        heapSort(arr, arr.length)
    } else if (select.value === 'comb') {
        combSort(arr)
    }
}
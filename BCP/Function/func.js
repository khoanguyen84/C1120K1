function enterNumber(message) {
    let number = 0;
    do {
        number = Number(prompt(`${message}:`));
    }
    while (isNaN(number) || !Number.isSafeInteger(number) || number < 0)
    return number;
}

function generateArray(size, min, max) {
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr[i] = Math.floor(Math.random() * (max - min + 1) + min);
    }
    return arr;
}

function printArray(arr, separator) {
    return arr.join(separator);
}

function totalArray(arr) {
    let total = 0;
    for (let item of arr) {
        total += item;
    }
    return total;
}

function main() {
    let size = enterNumber('enter size');
    let arr = generateArray(size, 10, 90);
    let arr2 = generateArray(20, 30, 90);
    document.write(printArray(arr.concat(arr2)));
    document.write("<br>");
    document.write(`Total value: ${totalArray(arr)}`);
}
main();
let arr1 = [];
let arr2 = new Array();
let arr3 = [1, 2, 3, 4, 5];
let arr4 = new Array(1, 2, 3, 4, 5);

let arr5 = arr4;
arr4[1] = 20;
document.write(arr5[1] + "<br>");
arr5[1] = 200;
document.write(arr4[1]);

// let x = arr4[1];
// arr4[1] = 2;
// document.write(x);


let arr6 = [];
for (let i = 0; i < arr3.length; i++) {
    arr6[i] = arr3[i];
}
arr3[2] = 30;

let M = new Array();

for (let i = 0; i < 5; i++) {
    let A = [];
    for (let j = 0; j < 5; j++) {
        A[j] = Math.floor(Math.random() * 61 + 20);
    }
    M[i] = A;
}

// debugger;
let max = arr3[0];
for (let i = 1; i < arr3.length; i++) {
    if (arr3[i] > max) {
        max = arr3[i];
    }
}

// [min, max]
// Math.floor(Math.random()*(max - min + 1) + min)


// Math.floor(Math.random()*61 + 20)

document.write("<br>");
for (let i = 0, count = 0; i < Math.floor(Math.random() * 10); i++) {
    document.write(count++);
}

arr5.sort(function(a, b) {
    return a - b;
})

arr5.sort(Comparer);

function Comparer(a, b) {
    return a - b;
}

document.write('<br>')
arr5.forEach(function(v, i) {
    document.write(`${v}, `);
})

for (let i = 0; i < arr5.length; i++) {
    if (arr5[i] < 5) return false;
}
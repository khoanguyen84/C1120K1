function changeColor(value) {
    document.getElementsByTagName('body')[0].style.background = value;
}

document.write("Show by document.write");
console.log("show by console.log");
// window.alert("show by windown.alert");

// document.getElementsByTagName('h1')[0].innerHTML = "show by innerHTML";
// document.getElementsByName('heading')[0].innerHTML = "show by get by name";
// document.getElementById("h1").innerHTML = "show by get by Id";
document.getElementsByClassName("heading")[0].innerHTML = "show by get by class name";

// let hello = "hello 1";
// console.log(hello);
// if (true) {
//     let hello = "hello 2";
//     console.log(hello);
// }
// console.log(hello);

let r1 = 6;
r1++ + 2; //9 -- 8
++r1 + 2; //8 -- 9
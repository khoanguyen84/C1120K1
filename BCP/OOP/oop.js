// let khoa = {};
// khoa.firstName = "Khoa"
// khoa.lastName = "Nguyễn"

// khoa.showInfo = function() {
//     return `${this.firstName} ${this.lastName}`;
// }


// let minh = {
//     firstName: "Minh",
//     lastName: "Hoàng",
//     age: 18,
//     showInfo: function() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    this.showInfo = function() {
        return `${this.firstName} ${this.lastName} ${this.age}`;
    }
}

class Human {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    showInfo() {
        return `Fullname: ${this.firstName} ${this.lastName}, Age: ${this.age}`;
    }
}

class Student extends Human {
    constructor(firstName, lastName, age, email) {
        super(firstName, lastName, age);
        this.email = email;
    }
    showInfo() {
        return `${super.showInfo()},Email: ${this.email}`;
        // return `${this.firstName} ${this.lastName} ${this.age} ${this.email}`;
    }

    printInfo() {
        return this.showInfo();
    }

    static slogen() {
        return "I Love VietName";
    }
}

// let khoa = new Human();
// khoa.firstName = "Khoa";

let tai = new Human("Tai", "Tran", 18);

let arr = [];
//overloading ~ tải bội
arr.splice()
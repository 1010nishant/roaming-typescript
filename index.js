"use strict";
exports.__esModule = true;
var user = {
    firstName: "naman",
    lastName: "sharma",
    age: 30,
    active: "yes",
    address: 43,
    getName: function () {
        return "my name is nishant";
    }
    // getName() {
    //     return "name"
    // },
};
var name = 23;
user.age = 12122;
// console.log(user.getName())
console.log(user, name);
//2
//here var or let allowed but not const
var userobj;
userobj = {
    firstName: "nishant",
    lastName: "kumar",
    age: 30,
    active: "yes",
    address: 43
};
// console.log(userobj)
//3
//type inference
//https://www.typescripttutorial.net/typescript-tutorial/typescript-type-inference/
//4

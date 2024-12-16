console.log(hoistedVar); // undefined (var is hoisted)
var hoistedVar = "I'm hoisted";

// console.log(notHoistedVar); // will throw a ReferenceError
let notHoistedVar = "I am not hoisted";

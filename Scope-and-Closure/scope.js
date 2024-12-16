let globalVar = "I'm global";

function testScope() {
  let functionVar = "I'm local to this function";
  console.log(globalVar);
  console.log(functionVar);
}
testScope();
console.log(globalVar);
// console.log(functionVar); // This line will throw an error

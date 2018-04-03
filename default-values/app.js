// This is a neat trick to set to a function with a default value. Because operators are functions they will return a value
// In the first case the value of name will be undefined because all variables get set to undefined during the creation phase
// undefined is an falsey value and will therefor return the string "Your name here" because that's a truthy value
// The second function call will return name as 'Sam' and will therefor return that to the variable because true || true
// Will return the first truthy value in this case it's 'Sam'
function greet(name) {
  name = name || "Your name here";
  console.log("Hello" + name);
}

greet();
greet('Sam');
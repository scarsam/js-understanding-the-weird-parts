var objectLiteral = {
  firstName: 'Sam',
  isProgrammer: true
};
// This will convert the object to a JSON string
console.log(JSON.stringify(objectLiteral));

// This is JSON, all key value pairs needs to wrapped in quotes
// Very similar to the object literal syntax, anything that is JSON valid is also valid Object literal syntax
// JSON do have some stricter rules than Object literal syntax
var jsonValue = JSON.parse('{"firstName": "Sam", "isProgrammer": true}');
// This will convert the JSON to an object
console.log(jsonValue);

// Data used to get passed through XML, it looked something like this:
// A lot of wasted extra bandwidth, to send this data
// <objectLiteral>
//   <firstName>Sam</firstName>
//   <isProgrammer>true</isProgrammer>
// </objectLiteral>
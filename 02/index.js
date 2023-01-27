// built in data type: number, string, boolean, void (return na korle), undefined., null,
// string TYPE EXAMPLE
var firstName;
var lastName;
var fullName;
var occupation;
firstName = "Anisul";
lastName = " Islam";
occupation = "student";
console.log(firstName);
console.log(lastName);
console.log(occupation);
// toUpperCase()
console.log(firstName.toUpperCase());
// toLowerCase()
console.log(firstName.toLowerCase());
// split([separator[,limit]])
console.log(fullName.split(" "));
// concat()
fullName = firstName.concat(lastName);
console.log("User ".concat(fullName, " is a ").concat(occupation));
var userName;
var id;
var isLoggedIn;
console.log(userId.toLowerCase()); // error here
function display() {
    console.log("Hi I am display");
}
display();
// optional properties and undefined type
var printFullName = function (firstName, lastName) {
    var fullName = firstName + lastName;
    if (lastName !== undefined) {
        console.log(fullName);
    }
};
printFullName("Anisul", " Islam");
printFullName("Anisul");

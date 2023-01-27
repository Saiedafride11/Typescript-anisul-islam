// built in data type: number, string, boolean, void (return na korle), undefined., null,

// string TYPE EXAMPLE
let firstName: string;
let lastName: string;
let fullName: string;
let occupation: string;

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

console.log(`User ${fullName} is a ${occupation}`);

let userName: string;
let id: number;
let isLoggedIn: boolean;

console.log(userId.toLowerCase()); // error here

function display(): void {
  console.log("Hi I am display");
}
display();

// optional properties and undefined type
const printFullName = (firstName: string, lastName?: string) => {
  const fullName = firstName + lastName;
  if (lastName !== undefined) {
    console.log(fullName);
  }
};

printFullName("Anisul", " Islam");
printFullName("Anisul");
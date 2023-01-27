var names;
names = { name1: "anis" };
console.log(names);
var users;
users = [];
var user1;
user1 = { userName: "anis", userId: 101 };
users.push(user1);
var user2;
user2 = { userName: "rabu", userId: 102 };
users.push(user2);
for (var key in users) {
    console.log(users[key]["userName"]);
}

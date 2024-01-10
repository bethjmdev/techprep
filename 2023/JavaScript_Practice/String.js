// useful string properties and methods

let userName = "Beth";
let phoneNumber = "123-456-7890";

let nameLength = userName.length;
//shows your the legnth of the string
//OUT PUT - 5

let firstLetter = (userName = charAt(0));
//OUT PUT - B
// shows you what charater is at the requested index

userName.indexOf("e");
//OUT PUT- 1
//index of first occurance of a letter

userName.lastIndexOf("e");
//OUT PUT- 7
// index of last occurance of a letter

userName = userName.trim();
//IN PUT- "  bethanee  "
//OUT PUT- "bethanee"
//gets rid of any extra spaces before or after any characters

userName = userName.toUpperCase();
//OUT PUT - BETH

userName = userName.toLowerCase();
//OUT PUT- beth

phoneNumber = phoneNumber.replacecAll("-", "/");
//replace all
//takes 2 arguments: what you would like to replace, what you'd like to replace with
// OUT PUT - 123/456/7890

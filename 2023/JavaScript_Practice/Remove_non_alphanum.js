var str = "Li!nu%x#hint* is$ th^e bes`t web’si!te";
var regexPattern = /[^A-Za-z0-9]/g;
var ans = str.replace(regexPattern, "");
console.log(ans);

//In JavaScript, /[^A-Za-z0-9]/g is a regular expression pattern enclosed in forward slashes (/). This pattern is used for matching any character that is not an uppercase letter (A-Z), lowercase letter (a-z), or a digit (0-9). The ^ inside the square brackets [] indicates negation, meaning it will match any character not listed within the brackets.

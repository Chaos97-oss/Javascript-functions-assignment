// extracting substrings//
let string ="javascript is fun!";
let Lengthofstring = string.substring(13, 18);
console.log(Lengthofstring);


//changing case//
let text1 = "hello"
let text2 = "WORLD"
let stringtext1 = text1.toLowerCase();
let stringtext2 = text2.toUpperCase();
console.log(stringtext1, stringtext2);



//finding characters//
let p = "programming";
let index = p.indexOf("r");
console.log(index);


//checking for inclusion//
let webs = "web development";
let containsweb = webs.includes("web");
console.log(containsweb);


//string length//
let code = "coding is cool";
let length = code.length;
console.log(code.length);


//Replacing substrings//
let apple = "I like apples and apples";
let orange = apple.replaceAll(/apples/g, "oranges");
console.log(orange);


//splitting strings//
let f = "apple, banana, orange";
let fruit = f.split(",");
console.log(fruit);


//Trimming Whitespace//
let extra = " Extra spaces ";
let extrad = extra.trim();
console.log(extrad);


//Concatenantion//
let fe = "Front";
let en = "end";
let FE = "Front" + "end";
console.log(FE);


//Repeating strings//
let laugh = "ha";
let result = laugh.repeat(3);
console.log(result);


//Calculate Area Function
function calculateArea (length, width) {
  return length * width;
}
console.log(calculateArea(3.5, 2));


// String Reverser
function reverseString(str) {
  return str.split("").reverse().join("")
}
console.log(reverseString("hello"));


//Even number checker
function isEven(number) {
  return number % 2 === 0; 
} 
console.log(isEven(4));
console.log(isEven(7));


//Score Categorizer
function scoreCategory(score) {
  if (score >= 90) {
    return "Excellent";
  } else if (score >= 80) {
    return "Very good";
  } else if (score >= 70){
    return "Pass";
  } else {
    return "fail";
  } 
}
console.log(scoreCategory(99));
console.log(scoreCategory(87));
console.log(scoreCategory(75));
console.log(scoreCategory(60));







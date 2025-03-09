//Calculate Area Function//
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







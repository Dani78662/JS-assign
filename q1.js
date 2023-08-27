// 1. Rewrite the following code using a ternary operator:
// let result;
// if (score >= 80) {
//     result = "Pass";
// } else {
//     result = "Fail";


function turnaryFunction(score){
    let result = (score >= 80) ? "Pass" : "Fail";
return result;
}
console.log(turnaryFunction(75));
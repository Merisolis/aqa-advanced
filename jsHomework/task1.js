// Function declaration
function calculateArea(width, height) {
    return width * height;
}
console.log(calculateArea(5, 10)); 

// Function expression
const calculateAreaExpression = function(width, height) {
    return width * height;
};
console.log(calculateAreaExpression(5, 10)); 
// Arrow function
const calculateAreaArrow = (width, height) => width * height;
console.log(calculateAreaArrow(5, 10)); 
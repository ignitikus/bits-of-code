// This function returns factorial number of a product
function reverseFactorial(n){
    let factorial = 1;
    let num = 1;
    while(num <= n){
        num *= (factorial + 1);
        factorial++;
    } return `${factorial - 1}!`
}


// Function for small factorial numbers. Scientific notation will kick in after 1e+21

function factorial(n){
    let factorial = 0;
    let num = '1';
    while(factorial < n){
        num = num * (factorial + 1);
        factorial++;
    } return num
}
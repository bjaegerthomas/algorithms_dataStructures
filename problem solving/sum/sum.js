function sum (a,b) {
    if (a !== typeof 9 || b !== typeof 9) {
        return a+b;
    } else {
        console.log("Please enter valid numbers");
    }
}

a = input("Enter first number: ");
b = input("Enter second number: ");
console.log("The sum is: " + sum(a, b));
    
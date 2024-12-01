// Robust Calculator

const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to get user input with error handling using try and catch in javascript
function getNumber(promptText, callback) {
    rl.question(promptText, (input) => {
        try {
            const number = parseFloat(input);
            if (isNaN(number)) {
                throw new Error("Invalid input. Please enter a valid number.");
            }
            callback(number);
        } catch (error) {
            console.log(`Error: ${error.message}`);
            getNumber(promptText, callback); // Prompt the user again  for valid input 
        }
    });
}

// The function to perform arithemetic operations
function calculator() {
    try {
        getNumber("Enter the first number: ", (x) => {
            getNumber("Enter the second number: ", (y) => {
                try {
                    if (isNaN(x) || isNaN(y)) {
                        throw new Error("Unexpected error: One of the inputs is not a valid number.");
                    }

                    let sum = x + y;
                    let difference = x - y;
                    let product = x * y;

                    let division;
                    if (y !== 0) {
                        division = x / y;
                    } else {
                        division = "Error: Division by zero is not allowed.";
                    }

                
                    console.log(`Results:
                    The Sum is: ${sum}
                    The Difference is: ${difference}
                    The Product is: ${product}
                    The Division is: ${division}`);

                } catch (calculationError) {
                    console.log(`Error during Calculation: ${calculationError.message}`);
                } finally {
                    rl.close();
                }
            });
        });
    } catch (generalError) {
        console.log(`This is an Unexpected Error: ${generalError.message}`);
        rl.close();
    }
}

// Run the calculator
calculator();

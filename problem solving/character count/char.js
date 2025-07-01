// Loop through an inputed string to find the charcater count for each alpha numeric character
function charCount(str) {

    result = {};
    // Loop through each character in the string
    for (char in str) {
        // determine if charcater is alphanumeric if so add 1 to count
        if (char) {
            result[char]++;
        }
        // establish count for that character
        else {
            result[char] = 1;
        }
    }
}

console.log (charCount("Hello World!"));

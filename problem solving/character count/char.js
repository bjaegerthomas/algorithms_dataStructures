// Loop through an inputed string to find the charcater count for each alpha numeric character
function charCount(str) {

    let result = {};
    // Loop through each character in the string
    for (let char in str) {
        // determine if character is alphanumeric if so add 1 to count
        if (char > 0) {
            result[char]++;
        }
        // establish count for that character
        else {
            result[char] = 1;
        }
    }
    return result;
}

console.log(charCount("Hello World!"));

// Write a function that takes a number as an input.
// Have it create an empty array and then push a string into the array as many
// times as the input number. If the input is anything other than a positive
// integer return an empty array
//
// Name the function "finalFunction"

function finalFunction(number) {
    const empty = [];
    if (number > 0) {
        for (let i = 0; i < number; i++) {
            empty.push('hello')
        }
    } else {
        return empty
    }
    return empty
}
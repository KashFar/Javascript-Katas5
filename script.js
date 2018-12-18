const errorMsg = "Function Returns the Wrong answer"
function reverseString(str) {

    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");

    return joinArray;

    // same as return str.split("").reverse().join("");
}

console.log(" 1. Reverse a string")
console.log(reverseString("hello"));
console.assert(reverseString("word") === "drow");

console.assert(reverseString("Hat") === "Mat", {
    String: "Hat", errorMsg: errorMsg
});

// 2. Reverse a sentence ("bob likes dogs" -> "dogs likes bob")

function reverseSentence(str) {

    var splitSentence = str.split(" ");

    var reverseSentence = splitSentence.reverse();

    var joinArray = reverseSentence.join(" ");

    return joinArray;
}

console.log(" 2. Reverse a sentence (bob likes dogs -> dogs likes bob")

console.log(reverseSentence("Hello World"));
console.log(reverseSentence("What are you doing"));
console.assert(reverseSentence("What are you doing") === "doing you are What");

console.assert(reverseSentence("Hello Friend Boy") === "Hello Friend Boy",{
    String: "Hello Friend Boy", errorMsg: errorMsg
});

// 3. Find the minimum value in an array

testArray1 = [-23, 5, 6, 447, 83, 91, 10, 11, 12, 132, 14, 2123]
testArray2 = [0, 200, 4, 609, 870, 100, 192, 14, 16000, 18]
testArray3 = [132, 14, 2123, 132, 14, 2123]
testArray4 = [16000, 18, 16000, 18, 16000, 19, 16000, 18]

function minValue(array) {
    var minValue = Math.min.apply(Math, array)
    return minValue
}

console.log(" 3. Find the minimum value in an array")
console.log(minValue(testArray1));
console.assert(minValue(testArray2) === 0);
console.assert(minValue(testArray2) === 3, {
    Array: testArray2, errorMsg: errorMsg 
});

// 4. Find the maximum value in an array

function maxValue(array) {
    var maxValue = Math.max.apply(Math, array);
    return maxValue
}

console.log(" 4. Find the maximum value in an array")
console.log(maxValue(testArray1));
console.assert(maxValue(testArray2) === 16000);
console.assert(maxValue(testArray2) === 1600);
console.assert(minValue(testArray2) === 3, {
    Array: testArray2, errorMsg: errorMsg 
});

// 5. Calculate a remainder (given a numerator and denominator)

function remainder(numerator, denominator) {
    let remainder = numerator % denominator
    return remainder
}

console.log(" 5. Calculate a remainder (given a numerator and denominator")
console.log(remainder(4, 3));
console.assert(remainder(10, 3) === 1);
console.assert(remainder(5, 2) === 2, {
    Inputs: "Remainder of 5 and 2 is 1", errorMsg: errorMsg 
});

// 6. Return distinct values from a list including duplicates (i.e. "1 3 5 3 7 3 1 1 5" -> "1 3 5 7")

function distinctValues(arr) {
    var distinctValues = Array.from(new Set(arr))
    return distinctValues
}

console.log("6. Return distinct values from a list including duplicates (i.e. 1 3 5 3 7 3 1 1 5 -> 1 3 5 7");
console.log(distinctValues(testArray3));
console.log(distinctValues(testArray4));
console.assert(JSON.stringify(distinctValues(testArray4)) === JSON.stringify([16000, 18, 19]),
    { testArray4, erroMSG: "This doesn't match" });
console.assert(JSON.stringify(distinctValues(testArray4)) === JSON.stringify([1600, 18, 19]),
    { testArray4, erroMSG: "Incorrect Unique Values" });

// 7. Return distinct values and their counts (i.e. the list above becomes "1(3) 3(3) 5(2) 7(1)")

function distinctCounts(Arr) {
    var counts = {};
    for (var i = 0; i < Arr.length; i++) {
        counts[Arr[i]] = 1 + (counts[Arr[i]] || 0);
    }
    return counts;
}
console.log("7. Return distinct values and their counts (i.e. the list above becomes 1(3) 3(3) 5(2) 7(1)");
console.log(distinctCounts(testArray3));
console.log(distinctCounts(testArray4));

console.assert(JSON.stringify(distinctCounts(testArray3)) === JSON.stringify({14: 2, 132: 2, 2123: 2}),{
    Inputs: "Answer is {14: 2, 132: 2, 2123: 2}", errorMsg: errorMsg 
});
console.assert(JSON.stringify(distinctCounts(testArray4)) === JSON.stringify([16000, 18, 16000, 18, 16000, 19, 16000, 18]),{
    Inputs: "Answer is {18: 3, 19: 1, 16000: 4}", errorMsg: errorMsg 
});

// 8. Given a string of expressions (only variables, +, and -) and an object describing a 

console.log("8. Given a string of expressions (only variables, +, and -) and an object describing a"
    + " set of variable/value pairs like {a: 1, b: 7, c: 3, d: 14}, return the result"
    + " of the expression (a + b + c -d would be -3).");

// set of variable/value pairs like {a: 1, b: 7, c: 3, d: 14}, return the result 
// of the expression ("a + b+c -d" would be -3).

// use Object.keys()
// var array = {a: 1, b: 7, c: 3, d: 13},
//for each through this now, and if its a variable, match it to key in object
// and push. if its a operation execute it
// put the parameters later

function evaluate(string, obj) {

    var splitstring = string.split(" ");
    let output = obj[string[0]];

    for (i = 1; i < splitstring.length - 1; i++) {
        let nextValue = splitstring[i + 1]
        if (splitstring[i] === "+") {
            output += obj[nextValue]
        } else if (splitstring[i] === "-") {
            output -= obj[nextValue]
        }
    }
    return output
}

if(evaluate("a + b + c - d", { a: 1, b: 7, c: 3, d: 14 }) === -3) {
    console.log("This function is working properly")};

console.assert(evaluate("a + b + c - d", { a: 1, b: 7, c: 3, d: 14 }) === -2,{
    Inputs: "Answer is -3", errorMsg: errorMsg 
});

console.assert(evaluate("a + b + c - d", { a: 1, b: 7, c: 3, d: 4 }) === -4,{
    Inputs: "Answer is 6", errorMsg: errorMsg 
});


        // for (var property in obj) {
        //     string1 += obj[property] + " ";
        //   }
        //   console.log(toString(string1));
// var merged = [].concat.apply([], arrays);
// console.log(merged)
// console.log( Object.keys(obj)) ;

//console.log(evaluate EventSource. blah blah)

// console.log(evaluate("a + b + c - d", {a: 1, b: 7, c: 3, d: 14}));
// console.assert(evaluate("a + b + c - d", {a: 1, b: 7, c: 3, d: 14}) === -3);


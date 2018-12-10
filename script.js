// 1. Reverse a string

function reverseString(str) {

    var splitString = str.split("");

    var reverseArray = splitString.reverse();

    var joinArray = reverseArray.join("");

    return joinArray;

    // same as return str.split("").reverse().join("");
}

console.log(reverseString("hello"));
console.assert(reverseString("word") === "drow");

// 2. Reverse a sentence ("bob likes dogs" -> "dogs likes bob")

function reverseSentence(str) {

    var splitSentence = str.split(" ");

    var reverseSentence = splitSentence.reverse();

    var joinArray = reverseSentence.join(" ");

    return joinArray;
}

console.log(reverseSentence("Hello World"));
console.log(reverseSentence("What are you doing"));
console.assert(reverseSentence("What are you doing") === "doing you are What");

// 3. Find the minimum value in an array

testArray1 = [-23, 5, 6, 447, 83, 91, 10, 11, 12, 132, 14, 2123]
testArray2 = [0, 200, 4, 609, 870, 100, 192, 14, 16000, 18]
testArray3 = [132, 14, 2123, 132, 14, 2123]
testArray4 = [16000, 18, 16000, 18, 16000, 19, 16000, 18]

function minValue(array) {
    var minValue = Math.min.apply(Math, array)
    return minValue
}
console.log(minValue(testArray1));
console.assert(minValue(testArray2) === 0);

// 4. Find the maximum value in an array

function maxValue(array) {
    var maxValue = Math.max.apply(Math, array);
    return maxValue
}
console.log(maxValue(testArray1));
console.assert(maxValue(testArray2) === 16000);

// 5. Calculate a remainder (given a numerator and denominator)

function remainder(numerator, denominator) {
    let remainder = numerator % denominator
    return remainder
}
console.log(remainder(4, 3));
console.assert(remainder(10, 3) === 1);

// 6. Return distinct values from a list including duplicates (i.e. "1 3 5 3 7 3 1 1 5" -> "1 3 5 7")

function distinctValues(arr) {
    var distinctValues = Array.from(new Set(arr))
    return distinctValues
}

console.log(distinctValues(testArray3));
console.log(distinctValues(testArray4));
console.assert(JSON.stringify(distinctValues(testArray4)) === JSON.stringify([16000, 18, 19]),
    { testArray4, erroMSG: "This doesn't match" });

// 7. Return distinct values and their counts (i.e. the list above becomes "1(3) 3(3) 5(2) 7(1)")

function distinctCounts(Arr) {
    var counts = {};
    for (var i = 0; i < Arr.length; i++) {
        counts[Arr[i]] = 1 + (counts[Arr[i]] || 0);
    }
    return counts;
}
console.log(distinctCounts(testArray3));

// 8. Given a string of expressions (only variables, +, and -) and an object describing a set of variable/value 


// var array = {a: 1, b: 7, c: 3, d: 13},

function evaluate (expression, object){
    var expression = "a + b + c - d";
    
    //parse the expression, to extract the sign as commands. split it on sempty
    //space. 
    
    var splitExpression = expression.split(" ");
    //for each through this now, and if its a variable, match it to key in object
    // and push if operation do it 

    return splitExpression;
}
console.log(evaluate("a + b + c - d", {a: 1, b: 7, c: 3, d: 14}));
  
console.assert(evaluate("a + b + c - d", {a: 1, b: 7, c: 3, d: 14}) === -3);
// 9 cont. pairs like {a: 1, b: 7, c: 3, d: 14}, return the result of the expression ("a + b+c -d" would be -3).
// 1. Quick Questions #1. What does the following code return?
// new Set([1, 1, 2, 2, 3, 4]); // returns Set(0) { 1,2,3,4 }

// 2. Quick Questions #2 What does the following code return?
[...new Set("referee")].join(""); // returns string 'ref'

// 3. Quick Questions #3 What does the Map 'm' look like after running the following code?
let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);
// going to return Map(2) {[1,2,3] => true, [1,2,3] => false}

// 4. hasDuplicate, Write a function called hasDuplicate which accepts an array and returns true/false if that array contains a duplicate
const hasDuplicate = (arr) => [...new Set(arr)].length !== arr.length;

// 5. vowelCount, Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.
const vowelCount = (string) => {
    const vowelMap = new Map();
    for (let c of string.toLowerCase()){
        if ('aeiou'.includes(c)){
            if(vowelMap.has(c)){
                vowelMap.set(c, vowelMap.get(c) + 1); // This is really dumb...
            }
            else{
                vowelMap.set(c, 1);
            }
        }
    }
    return vowelMap;
}

console.log(vowelCount('awesome')) // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
console.log(vowelCount('Colt')) // Map { 'o' => 1 }
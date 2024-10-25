let counter = 0;

function recursive() {
    counter +=1
    recursive()
}
try{
    recursive()
} catch(error){
    console.log("Error caught:", error.message);
    console.log("Counter value when error occurred:", counter);
}
//Part 2
function flattenRecursive(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let elements = array[i];
        if (Array.isArray(elements)) {
            result = result.concat(flattenRecursive(elements));
        } else {
            result.push(elements);
        }
    }
    return result;
}

// Trampoline Function
function trampoline(func) {
    return function (...args) {
        let result = func(...args);
        while (typeof result === 'function') {
            result = result();
        }
        return result;
    };
}
//Test both flatten array and with trampoline
const flat = flattenRecursive([1, [2, [3, [4, [5]]]]],)
console.log(flat)

const Tramp = trampoline(flattenRecursive)

Tramp([
    [1, 2, [3, 4], 5],
    [1, [2, [3, [4, [5]]]]],
    [1, [2, 3], [[4, 5], [6]], 7],
    [1, [], [2, [3, []]], 4],
    [1, 'a', [true, [null, [undefined]]], 2],
]);
// Cache the HTML element
const element = document.getElementById("output");

function isPrime(n){
    if (n <= 1) {
        return false;
    }
    if (n === 2){
        return true;
    }
    if (n % 2 === 0) {
        return false;
    }
    for(let i = 3; i <= Math.sqrt(n); i += 2){
        if (n % i === 0){
            return false;
        }
    }
    return true;
}

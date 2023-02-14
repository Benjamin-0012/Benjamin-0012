//1. Print even numbers frrom 0-10
for(i=0; i<=10; i+=2){
    console.log(i);
}
//3. Create a length converter function
const kilometers = 1
const factor =0.621
const miles =kilometers*factor 
console.log('${kilometers} kilometers ${miles} miles.');
//4. Calculate the sum of numbers within an array
function sumA(array){
    let sum = 0;
    array.forEach(element => {
        sum +=element;
    });
    console.log(sum);
    return sum;
}
sumA([6, 8, -3, -1])
//5. Create a function that reverses an array
let x = [1, 2, 3, 4];
    let y = [];
    for (let i = x.length - 1; i >= 0; i--) {
        y.push(x[i]);
    }
     console.log("Reversed array: ");
    console.log(y);
//6. Sort an array from lowest to highest
let array = [ 3, 4, 1, 2, 5, 7];
array.sort((a, b) => a - b);
console.log(array);
//7. Create a function that filters out negative numbers
let numbers = [-2, 4, -5, 5];
positiveNumbers = numbers.filter(n => n >0);
console.log(positiveNumbers);
//8. Remove the spaces found in a string
const welcome ='    Your welcome';
console.log(welcome);
console.log(welcome.trim());
//9. Return a Boolean if a number is divisible by 10
const booleanNum = (num) => {
    return num % 10 === 0 ? true : false
}
console.log(booleanNum(270))
//10. Return the number of vowels in a string
function getCount(str){
    var vowelsCount =0
    const vowels = ['a','e','i','o','u']
    for (let char of str){
    if (vowels.includes(char)){
        vowelsCount++
    }
}
return vowelsCount
}
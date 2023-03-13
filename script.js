console.log('Exzample 1') 
let d = 7;
console.log(d);
console.log(d ** 2);
console.log(d ** 3);


console.log('Example 2')
let num2 = +prompt('Enter the number');
if (num2 > 0) {
    console.log(num2*2);
}


console.log('Example 3')
let a3 = +prompt('Enter first number');
let b3 = +prompt('Enter second number');

if (a3 > b3) {
    console.log(a3 + b3);
}
else if (a3 < b3){
    console.log(a3 * b3);
}
    else {
    console.log('Числа одинаковые');
    
    }


console.log('Example 4')
let numb4 = +prompt('Enter the number');
if (numb4 < 0) {
    console.log(numb4 ** 2);
}
else {
    console.log('Ошибка')
}


console.log('Example 5')
let student = +prompt('Enter the number of students ');
let chair = +prompt('Enter the number of chairs');
if (student <= chair) {
    console.log('Стульев хватает');
}
else {
    console.log('Стульев  не хватает')
    }


console.log('Example 6');
console.log('Start');
for (let i = 0; i < 10; i++){
    console.log(i);
}
console.log('Finish');



console.log('Example 7');

for ( let i = 10; i < 100; i++){
    if (i % 5 == 0) {
      console.log(i);
    } 
   
}
    
console.log('Example 8');
let arr = [4, 8, 28, 36, 15, 3, 10];
console.log(arr);
for (let i = 0; i < arr.length; i++){
    if (arr[i]>= 15) {
         continue;
    }
    console.log(arr[i]);
}
    

console.log('Example 9');
let arr2 = [151, 2, 7, 38, 50, 1, 15, 0, 4, 13, 45, 23, 17, 99, 86];
console.log(arr2);
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] % 2 != 0) {
        console.log(arr2[i]);
    }
}


console.log('Example 10');
let arr3 = [1, 10, 3, 12, 45, 23, 17, 88, 90, 4];
console.log(arr3);
for (let i = 0; i < arr3.length; i++) {
    if (i % 3 == 0 ) {
        console.log(arr3[i]);
    }
}

// #### Task 6**

// ```javascript
//     const evenNumbers = [2, 4, 6, 8, 10]
//     const oddNumbers = [1, 3, 5, 7, 9]
// ```
// + Соедините два массива чисел в один.
// + В полученном массиве попробуйте найти индекс числа **`8`**

const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];
const concatedArrays = evenNumbers.concat(oddNumbers);
console.log(concatedArrays.indexOf(8));
//_______________________________________________________________________________________


// #### Task 7**

// Дан массив:
// ```javascript
//     const binary = [0, 0, 0, 0]
// ```
// + Наш бинарный массив неполный, в нем явно не хватает единиц.
// + Превратите данный массив в строку.
// > [0, 0, 0, 0] -> '0101010'

const binary = [0, 0, 0, 0];
const stringBinary = binary.toString();
console.log(stringBinary);
const zeroOne = binary.join('1');
console.log(zeroOne);
//_______________________________________________________________________________________

// #### Task 3**

// Дан массив:
// ```javascript
//    const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4]
// ```
// Создайте два массива, в один поместите все положительные числа включая 0, в другой все отрицательные. Оба массива затем выведите в консоль.

const mixedNumbers = [-14, 24, -89, 43, 0, -1, 412, 4];
const positiveNumbers = mixedNumbers.filter(num => num >= 0);
const negativeNumbers = mixedNumbers.filter(num => num < 0);
console.log(`Положительные числа:`, positiveNumbers);
console.log(`Отрицательные числа:`, negativeNumbers);
//_______________________________________________________________________________________

// #### Task 4**

// Создать массив длинной не менее 5, из динамически созданных случайных чисел. Далее написать алгоритм который берет все числа из исходного массива, возводит их в куб и записывает в новый массив. В конце вывести оба массива в консоль.

let randomArray = [];
for (let i = 0; i < 5; i++) {
    randomArray.push(Math.floor(Math.random() * 10));
}
console.log(randomArray);
const tripleNumbers = randomArray.map(item => item ** 3);
console.log(randomArray, tripleNumbers);

// Деструктуризация объектов
// const person = {
//     age: 23,
//     name: 'Dima',
//     sity: 'Minsk'
// };
// const {name , age,} = person;
// console.log(age, name,);

// function palindrom() {
//     const str = prompt('Введите слово для проверки')
//     if (str.split('').reverse().join('') == str) {
//         console.log('Это палиндром');
//     } else {
//         console.log('Это не палиндром');
//     }
// }
// palindrom();


function palindrome() {
    const word = prompt();
    const wordCheck = word.split('').reverse().join('');
    return word === wordCheck;
}
console.log(palindrome());

/* Tasks variables */

/* 1 */
const helloJs = "hello js";
const num1 = 100;
const num2 = 5.5;
const bool = true;
console.log([helloJs, num1, num2, bool]);

/* 2 */
const n = 5;
console.log("На Олимпийском флаге " + n + " колец");

/* 3 */
const x1 = 1;
const x2 = 2;
const x3 = 3;
console.log(x1 + x2 * x3);

/* 4 */
a = 5;
h = 2;
areaTriangle = (1 / 2) * a * h;
console.log(areaTriangle);

/* Tasks functions */

/* 1 */
function isAdult() {
  const age = prompt("Укажите свой возраст");
  if (age >= 18) {
    alert("Совершенолетний");
    return true;
  }
  alert("Не совершенолетний");
  return false;
}

/* 2 */
function mrInSm(value) {
  return value * 100;
}

function mrInDm(value) {
  return value * 39, 37;
}

/* 3 */
function numberInThreePow(value) {
  return Math.pow(value, 3);
}

/* 4 */
function getRandomNumber() {
  const min = 0;
  const max = 10;
  return Math.round(Math.random() * (max - min) + min);
}

/* Tasks cicles */

/* 1 */
for (let i = 0; i <= 9; i++) {
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

/* 2 */
for (let i = 0; i <= 10; i++) {
  console.log(Math.pow(i, 2));
}

/* 3 */
for (let i = 0; i <= 10; i++) {
  let result = i * 9;
  console.log(`${i} * 9 = ${result}`);
}

/* 3* */
for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    let result = j * i;
    console.log(`${j} * ${i} = ${result}`);
  }
}

/* 4 */
let result = Number("");
for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    result += i;
  }
  continue;
}
console.log(result);

/* 5 */
for (let i = 25; i >= 0; i--) {
  console.log(i);
}

/* 6 */
for (let i = 0; i <= 20; i += 5) {
  console.log(i);
}

/* 6* */
for (let i = 0; i <= 20; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
  continue;
}

/* 7* */
for (let x = -2; x <= 2; x += 0.5) {
  let y = -3 * Math.pow(x, 2) + 5 * x - 2;
  console.log(`y = ${y}`);
}

/* 8* */
function solveAnExample() {
  let result1 = Number(
    prompt("Введите ответ на данное уровнение -> 2 + 2 * 2 = ?")
  );
  while (result1 !== 6) {
    result1 = Number(
      prompt("Введите ответ на данное уровнение -> 2 + 2 * 2 = ?")
    );
  }
  return "Congratulation!!!";
}

/* Tasks conditions */

/* 1, 2, 2* */
function askNumber() {
  const Number1 = Number(prompt("Введите число"));
  if (Number1 === 10) {
    alert("Верно");
  }else if(5 < Number1 & Number1 < 15){
      alert ('Привет');
  }else if(5 < Number1 || Number1 < 10){ 
      alert('Всегда true')   
  }else{
      alert('Не верно');
  }
}

/* 3 */
function askQuestions (){
    let result1 = Number(prompt('Сколько дней в году? (Не в высокосном)'));
    if (result1 === 365){
        alert('Верно :)')
    }else{
        alert('Не верно :(')
    }
}

/* 4* */
function pizzaOrder(){
    let summCoastPizza = prompt('Укажите какокой вес пиццы Вы хотите заказать (указать в граммах)');
    if (summCoastPizza < 1000){
        const resultPizzaWithoutDiscount = summCoastPizza / 100 * 30;
        alert (`К оплате ${resultPizzaWithoutDiscount}`);
    }else{
        const resultPizzaWithDiscount = (summCoastPizza / 100 * 30) - (summCoastPizza / 100 * 30 * 0.03);
        alert (`К оплате со скдикой ${resultPizzaWithDiscount}`);
    }
}

/* 5* */
function simpleOrNot (Number2){
    /* let Number2 = Number(prompt('Укажите число')); */
    if ((Number2 % 2 === 0 || Number2 % 3 === 0 || Number2 % 5 === 0) & (Number2 !== 2 & Number2 !== 3 & Number2 !== 5) || Number2 === 1){
        return "Не простое";
    }else{
        return 'Простое'
    }
}
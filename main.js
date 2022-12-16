let number1 = 10;
let result = '';
while (number1 < 21) {
    if (number1 === 20) {
        result += number1;
    }
    else {
        result += `${number1},`;
    }
    number1++;
}
console.log('Вивести на сторінку в один рядок через кому числа від 10 до 20', result);

let number2 = 10;
let resultSqare = '';
console.group(`Вивести квадрати чисел від 10 до 20:`);
while (number2 <= 20) {
    resultSqare = number2 * number2;
    number2++;
    console.log(`число ${number2 - 1} і його квадрат ${resultSqare}`);
}
console.groupEnd();

let number3 = 10;
let resultMult = '';
console.group(`Вивести таблицю множення на 7:`)
for (let number3 = 1; number3 < 11; number3++) {
    resultMult = number3 * 7;
    console.log(` ${number3} * 7=${resultMult}`);
}
console.groupEnd();

let Mult = 1;
console.group(`Знайти добуток усіх цілих чисел від 15 до 35:`)
for (let number4 = 15; number4 <= 35; number4++) {
    Mult = Mult * number4;
    console.log(`${number4} * добуток = ${Mult}`);
}
console.groupEnd();

let resultSum = 0;
let index = 0;
let average = 0;
console.group(`Знайти середнє арифметичне всіх цілих чисел від 1 до 500:`);
for (let number5 = 1; number5 <= 500; number5++) {
    resultSum = (resultSum + number5);
    console.log(`cума = ${resultSum}`);
    while (index <= number5) {
        console.log(`кількість чисел ${index}`);
        index++;
    }
    average = resultSum / (index - 1);
    console.log(`середнє=сума/кількість чисел= ${average}`)
}
console.groupEnd();

sum = 0;
console.group(`Вивести суму лише парних чисел в діапазоні від 30 до 80:`);
for (let number6 = 30; number6 <= 80; number6++) {
    if ((number6 % 2)) {
        continue;
    }
    sum += number6;
    console.log(` число ${number6}`);
    console.log(` сума ${sum}`);
}
console.groupEnd();


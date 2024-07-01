let number = 10;
if (number > 5) {
    console.log('Число больше 5');
}

let day = 3;
switch (day) {
    case 1:
        console.log('Понедельник');
        break;
    case 2:
        console.log('Вторник');
        break;
    case 3:
        console.log('Среда');
        break;
    default:
        console.log('Неизвестный день');
}

for (let i = 0; i < 5; i++) {
    console.log('Итерация номер ' + i);
}

let count = 0;
while (count < 5) {
    console.log('Счетчик: ' + count);
    count++;
}

do {
    console.log('Счетчик: ' + count);
    count++;
} while (count < 5);

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log('Итерация номер ' + i);
}

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log('Итерация номер ' + i);
}

function sum(a, b) {
    return a + b;
}

let result = sum(3, 4);
console.log('Результат: ' + result);
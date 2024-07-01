function calculateY(x) {
    try {
        let e = Math.E;
        let denominator = e + Math.exp(-x);
        if (denominator === 0) {
            throw new Error("Деление на ноль");
        }
        let y = -1 / denominator;
        return y;
    } catch (error) {
        alert(error.message);
        return null;
    }
}

let x = 5;
let result = calculateY(x);
if (result !== null) {
    document.body.innerHTML = "Результат расчёта y: " + result;
}

let s1 = "Я люблю Гродно";
let s2 = "Я учусь в Политехническом колледже";

let lengthS2 = s2.length;

let charAt13 = s1.charAt(12);
let asciiCode = charAt13.charCodeAt(0);

let s1Modified = s1.replace("Гродно", "Минск");

console.log("Длина строки s2: " + lengthS2);
console.log("13-й символ в строке s1: " + charAt13);
console.log("ASCII-код 13-го символа: " + asciiCode);
console.log("Изменённая строка s1: " + s1Modified);

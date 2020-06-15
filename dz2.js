// ввод данных
const factorialBase = Number(prompt('Введите число'));
// Ваш код тут
let result = factorialBase;
if (factorialBase > 1) {
  result = 1;
  for (let i = 1; i <= factorialBase; i++) {
    result = result * i;  
  }
}
// вывод для пользователя с помощью alert;
alert(result);
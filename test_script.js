'use strict'; // Вход в строгий режим, пока что желателен

////////////// Переменные, типы, константы //////////////

// let message1 = "Hello world...";    // переменная
// // message1 = 12345    // в одной и той же переменной можно хранить разные значения
// let myBigInt = 1234567890123456789012345678901234567890n;    // переменная типа BigInt (больше 2^53)
// let newStr = `This is ${myBigInt} number!`;  // Обратные кавычки, встраиваем выражения
// let isGreater = 4 > 1;   // boolean - значение выражения после равно
// let myInf = Infinity;   // Бесконечность, есть -бсконечность

// Nan - значение выражения не определено
// null - пусто
// undefinded - не определено, тоже число

// const language = "JavaScript!!!";   // константа
// const COLOR_ORANGE = "#FF7F00";     // константа-псевдоним тип

// alert(typeMath);
// alert(language);

/////////////////////////////////////////////////////////


//////////////          TypeOf             //////////////

// Возвращает тип передаваемого аргумента

// let typeAlert = typeof alert;   // функция
// let typeMath = typeof Math;   // функция
// Symbol - для создания уникальных идентификаторов в объектах
// let symbolType = typeof Symbol("id"); // symbol

/////////////////////////////////////////////////////////


//////////////  функции браузерные фишки   //////////////

// выводит модальное окно с текстом и полем для ввода
let userName = prompt("ПреВед, каК ТибЯ зАвОд?", "Еремей");
alert(`Ну привет, ${userName}`);

// выводит окно с вопросом. возвращает true или false (в зависимости от кнопки нажатой)
let isHuman = confirm("А тЫ ЧиЛавЕк?")
alert(isHuman);

/////////////////////////////////////////////////////////

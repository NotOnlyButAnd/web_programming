'use strict'; // Вход в строгий режим, пока что желателен

////////////// Переменные, типы, константы //////////////

// let message1 = "Hello world...";    // переменная
// message1 = 12345    // в одной и той же переменной можно хранить разные значения
// let myBigInt = 1234567890123456789012345678901234567890n;    // переменная типа BigInt (больше 2^53)
// let newStr = `This is ${myBigInt} number!`;  // Обратные кавычки, встраиваем выражения
// let isGreater = 4 > 1;   // boolean - значение выражения после равно
// let myInf = Infinity;   // Бесконечность, есть -бсконечность

//// Nan - значение выражения не определено
//// null - пусто
//// undefinded - не определено, тоже число

// const language = "JavaScript!!!";   // константа
// const COLOR_ORANGE = "#FF7F00";     // константа-псевдоним тип

// alert(typeMath);
// alert(language);

/////////////////////////////////////////////////////////


//////////////          TypeOf             //////////////

//// Возвращает тип передаваемого аргумента

// let typeAlert = typeof alert;   // функция
// let typeMath = typeof Math;   // функция
// Symbol - для создания уникальных идентификаторов в объектах
// let symbolType = typeof Symbol("id"); // symbol

/////////////////////////////////////////////////////////


//////////////  функции браузерные фишки   //////////////

//// выводит модальное окно с текстом и полем для ввода

// let userName = prompt("ПреВед, каК ТибЯ зАвОд?", "Еремей");
// alert(`Ну привет, ${userName}`);

//// выводит окно с вопросом. возвращает true или false (в зависимости от кнопки нажатой)

// let isHuman = confirm("А тЫ ЧиЛавЕк?");
// alert(isHuman);

/////////////////////////////////////////////////////////


//////////////    Преобразования типов     //////////////

//// строковое преобразование

// let myValue = 123;
// let strValue = String(myValue);

//// числовое преобразование

// let myStr = "123";  // станет 123 числом
// let myNumber = Number(myStr);

//// true -> 1; false -> 0; null -> 0; undefinded -> NaN

// let myNumber = Number(true);     
// alert(typeof myNumber);
// alert(myNumber);

//// логическое преобразование

// alert(Boolean(1));   // true; 0 - false
// alert(Boolean(' '))  // 'asd', '0' - true; '' - false

/////////////////////////////////////////////////////////


///////////////////    Математика   /////////////////////

// alert(2 ** 3);  // Возведение в степень
// alert(9 ** (1/2));     // квадратный корень тип
// alert('str' + 12);     // сложение строки и нестроки = строка
// alert(4 + 4 + 'str');  // операторы выполняются по порядку
// alert( 6 - '2' );      // 4, '2' приводится к числу
// alert( '6' / '2' );    // 3, оба приводятся к числам

//// унарный плюс преобразует не числа в числа
//// (с числами ничего не делает)
// alert( +true ); // 1
// alert( +"" );   // 0

//// например, в форме взяли кол-во яблок и апельсин
//// это строки. поэтому чтобы их сложить надо привести к числам
// let apples = "2";
// let oranges = "3";
// alert( +apples + +oranges ); // 5

//// присваивание еще возвращает значение
//// поэтому можно писать вот так:
// let a = 1;
// let b = 2;
// let c = 3 - (a = b + 1);
// alert(a); // вывод: 3
// alert(c); // вывод: 0

/////////////////////////////////////////////////////////

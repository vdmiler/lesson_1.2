/*
    Task 4:

    Напиши рядом с каждым выражением , тот ответ который по вашему мнению выведет console.
    И потом сравните ваш результат с тем что на самом деле вывела консоль.
    
    Infinity - "1" = Infinity;
    "42" + 42 = 4242
    2 + "1 1" = 21 1
    99 + 101 = 200
    "1" - "1" = 0
    "Result: " + 10/2 = Result: 5
    3 + " bananas " + 2 + " apples " = 3 bananas 2 apples

*/

let infinity = 10 / 0;
let result1 = infinity - "1";

console.log(result1);

console.log("42" + 42);

console.log(2 + "1 1");

console.log(99 + 101);

console.log("1" - "1");

console.log("Result: " + 10 / 2);

console.log(3 + " bananas " + 2 + " apples ");


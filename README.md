# Мое обучение JavaScript

## lesson_1 содежит домашние работы к семинару №1:

*   *1*: Необходимо пользователя попросить ввести температуру в градусах Цельсия, преобразовать введенное пользователем значение в соответствующую температуру в градусах по Фаренгейту и вывести в alert сообщение с текстом:
"Цельсий: {C}, Фаренгейт: {F}",
где вместо {C} и {F} должны быть подставлены соответствующие значения, которые были получены ранее.
Формула перевода градусов Цельсия в градусы Фаренгейта: 
градусы Фаренгейта = (9 / 5) * градусы Цельсия + 32. 
Уточнение: пользователь всегда вводит корректное число.

*   *2*: Необходимо создать переменную name, записать в эту переменную свое имя. Необходимо также создать переменную admin и присвоить этой переменной значение из переменной name. Вывести значение переменной admin в консоль.

*   *3*: Необходимо вывести в консоль значения выражений:
10 + 10 + "10"
10 + "10" + 10
10 + 10 + +"10"
10 / -""
10 / +"2,5"
В этих выражениях нет опечаток, вам их нужно скопировать и вывести в консоль.
Над каждым выводом в консоль необходимо объяснить почему мы получаем такой результат.
Объяснения пишите в таком формате:  
    /*
    1. 4 умножаем на 2 получаем 8. 
    2. 3 минус 8 получаем -5. 
    3. С помощью console.log выводим число -5 в консоль. 
    */  
    console.log(3 - 4 * 2);

*   *4*: Необходимо от пользователя получить число.
Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.  
Пример:  
Пользователь ввел число 163. Программа должна вывести:  
"В числе 163 количество сотен: 1, десятков: 6, единиц: 3"  
Пример 2:  
Пользователь ввел число 74. Программа должна вывести:  
"В числе 74 количество сотен: 0, десятков: 7, единиц: 4"  
Пример 3:  
Пользователь ввел число 9537. Программа должна вывести:  
"В числе 9537 количество сотен: 5, десятков: 3, единиц: 7"  
Уточнение: пользователь всегда вводит корректное положительное целое число.

# lesson_2 содежит домашние работы к семинару №2:

*   *1*: Для кода вставленного в теге script необходимо дать комментарии, почему мы
получаем такой результат (в свободной форме).
Подсказка. Чтобы лучше разобраться возьмите этот код и запустите в отладчике в
браузере со включенными точками остановки.

*   *2*: Для кода вставленного в теге script необходимо дать комментарии, почему мы получаем такой результат (в свободной форме). 
Подсказка. Чтобы лучше разобраться возьмите этот код и запустите в отладчике в
браузере со включенными точками остановки.

*   *3*: Необходимо попросить пользователя ввести два числа в переменные `a` и `b`.
Необходимо вывести в консоль один результат из следующих проверок:
    1. Если оба числа в переменных `a` и `b` положительные, вывести разность
чисел `a` и `b`, а именно, вычесть из переменной `a` значение переменной `b`.
    2. Если оба числа в переменных `a` и `b` отрицательные, вывести произведение
чисел `a` и `b`.
    3. Если числа в переменных `a` и `b` разных знаков, вывести сумму чисел
`a` и `b`.  
    В остальных случаях программа не должна ничего выводить.

*   *4*: Необходимо реализовать четыре функции, каждая функция должна принимать по два
числа и выполнять одну из операций (каждая функция выполняет одну из них):
    1. Сложение
    2. Разность
    3. Умножение
    4. Деление 

    Необходимо сделать так, чтобы функция вернула число, например выражение `console.log(sum(2, 6));` должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться).

    Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны.

    Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

    Необходимо для всех функций прописать комментарии jsdoc https://jsdoc.app/.

*   *5*: Необходимо скопировать и вставить в данный скрипт все функции из 4 задания. Необходимо реализовать функцию:
mathOperation(arg1, arg2, operation);

    Параметры:

    arg1 - первое число.  
    arg2 - второе число.  
    operation - строка, которая содержит один символ из: "+", "-", "*", "/".  
    
    Функция mathOperation должна вернуть результат операции, который был передан в параметр operation для двух первых аргументов (arg1 и arg2). Функция mathOperation должна использовать для вычисления функции из 4 задания.

    Примеры вызова функции:  
    console.log(mathOperation(5, 3, "+")); // 8  
    console.log(mathOperation(5, 3, ":)")); // NaN

    Функции mathOperation всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно, однако, в случае если был передан некорректный аргумент в параметр operation, необходимо вернуть NaN.  
    Необходимо для всех функций прописать комментарии jsdoc https://jsdoc.app/.

*   *6*: Необходимо реализовать функцию, которая будет принимать первым аргументом целое положительное число, в следующих трех аргументах функция принимает слова в разных склонениях. Функция должна возвращать одно из трех переданных в параметры слов подходящее под число, которое передано первым аргументом.  
Пример:  
    console.log(declinationOfNumber(1, "яблоко", "яблока", "яблок")); // "яблоко"  
    console.log(declinationOfNumber(2, "мяч", "мяча", "мячей")); // "мяча"  
    console.log(declinationOfNumber(5, "стул", "стула", "стульев")); // "стульев"  
Функция должна работать с любым словом и любым целым положительным числом. Все аргументы, которые будут передаваться функции будут верны.

# lesson_3 содежит домашние работы к семинару №3:

*   *1*: Необходимо с помощью цикла for вывести следующие 11 строк в консоль:  
    0 – это ноль  
    1 – нечетное число  
    2 – четное число  
    3 – нечетное число  
    … 
    10 – четное число

*   *2*: Необходимо из объекта, который лежит в константе post вывести значения, к которым приписан комментарий, в консоль.

*   *3*: Дан массив products, необходимо цену каждого продукта уменьшить на 15% используя метод forEach.


*   *4*: Задание №4:
    1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна фотография используя метод filter. Исходные данные - массив products.
    2. Необходимо отсортировать массив products используя метод sort по цене, начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести отсортированный массив в консоль.

*   *5*: Вывести с помощью цикла for числа от 0 до 9, НЕ используя тело цикла. То есть выглядеть должно примерно так:  
    * for(…){/* здесь пусто */}  
    
    Вместо многоточия нужно записать нужные разделы.
Помните, что в первом, втором и третьем раздела цикла можно не только писать условия или увеличивать счетчик, в этих разделах допустимы любые выражения, например вызовы функций.

*   *6*: Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:  
    ```
    x
    xx
    xxx
    xxxx
    xxxxx
    ```  
    Примечание: в трех косых кавычках ``` показан пример кода для вывода, вам эти кавычки выводить не нужно.

# lesson_4 содежит домашние работы к семинару №4:

*   *1*: Необходимо данное задание выполнить в es5 стиле и в es6 стиле.
Необходимо создать функцию-конструктор/класс для продукта.
Названия: `ProductES5` для es5 стиля, `ProductES6` для es6 стиля. При создании объекта от функции-конструктора/класса необходимо передавать имя и цену товара, эта информация должна быть сохранена в объекте. Также у объекта должна быть возможность выполнить метод `make25Discount`, данный метод должен уменьшать стоимость продукта на 25%. Необходимо продемонстрировать работу с объектом (в свободной форме).

*   *2*: Необходимо данное задание выполнить в es5 стиле и в es6 стиле.  
Необходимо создать функцию-конструктор/класс для поста в социальной сети.  
Названия: `PostES5` для es5 стиля и `PostES6` для es6 стиля.  
Пост должен хранить:
    1. Автора поста (имени достаточно).
    2. Текст поста.
    3. Дату и время последнего изменения поста.

    Данные автора поста и текст поста необходимо передавать при создании экземпляра объекта. Каждому экземпляру объекта должен быть доступен метод `edit`, который будет менять текст поста.

    ---
    Необходимо создать функцию-конструктор/класс для закрепленного поста всоциальной сети.  
Названия: `AttachedPostES5` для es5 стиля и `AttachedPostES6` для es6 стиля. Закрепленный пост должен наследоваться от обычного поста. Данные автора поста и текст поста необходимо передавать при создании экземпляра объекта.  
Закрепленный пост должен иметь свойство `highlighted`, в котором по умолчанию будет лежать значение false (это свойство будет обозначать, будет ли наш закрепленный пост подсвечен).  
У экземпляров объекта закрепленного поста должен быть метод с названием `makeTextHighlighted`, который сделает так, чтобы наш пост стал подсвеченным (будет менять свойство `highlighted`).  

    ---

    Подсказки:
    1. Задание сложное, советую делать по аналогии с примером на онлайн-занятии.
    2. Обратите внимание что пост хранит "дату и время последнего изменения поста", это значит что если пост кто-то изменит (например вызовет какой-то метод, который изменит что-то в посте), дата и время последнего изменения поста также должна измениться.
    3. Выполняйте все по порядку, не стоит пытаться сделать все сразу, иначе можно что-нибудь пропустить.
    4. Если непонятно условие - задайте вопрос.  


*   *3*: Необходимо создать функцию getDigitsOfNumber, которая принимает целое положительное число в диапазоне от 0 до 1000.  
Функция должна вернуть обычный объект с тремя свойствами:  
    1. units - содержит число, количество единиц в параметре функции.
    2. dozens - содержит число, количество десятков в параметре функции.
    3. hundreds - содержит число, количество сотен в параметре функции.  

    Если функции было передано не целое положительное число, либо число в ином диапазоне, нежели задано в условии, функция должна вывести в консоль информацию об ошибке и вернуть пустой объект. Необходимо также прописать jsdoc для данной функции.  
    Подсказка:  
    У объекта console есть разные методы, мы часто используем console.log для того чтобы вывести в консоль какое-то значение, однако есть и другие методы, найдите в интернете какие методы существуют и используйте "правильный метод" в нужном месте. Обратите внимание что функция не должна выбрасывать ошибку, она должна только вывести в консоль информацию о том, что что-то пошло не так.  
    Обратите внимание на слова "от 0 до 1000", это означает диапазон [0, 999], что можно прочитать как "от нуля до 999 включительно".

# lesson_8 содежит домашние работы к семинару №8:

*   Реализовать модуль корзины.
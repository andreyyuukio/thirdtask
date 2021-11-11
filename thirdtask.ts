function fibonatiArr(last_item: number): number[]{
    let myArray = [];
    let fibonatiRange: any = {
      from: 0,
      to: last_item,
    };    
    fibonatiRange[Symbol.iterator] = function() {
        return {
            range_item: this.from,
            last_item: this.to,
            next() {
            if (this.range_item <= this.last_item) {
                return { done: false, value: this.range_item++ };
            } 
            else {
                return { done: true };
            };    
            }
        };
    };    
    let prevItem: number = 0;
    let item: number = 1;
    for (let num of fibonatiRange) {
        let cnextItem: number = prevItem + item;
        prevItem = item;
        item = cnextItem;
        myArray.push(prevItem);    
    };
    return myArray;
};
    // 1.2 - рекурсивнуя функция получения н-ного члена ряда чисел фибоначи

function fibonatiRecurss(n: number): number {
    return (n <= 1) ?  n : 
    fibonatiRecurs(n - 1) + fibonatiRecurs(n - 2);
}
fibonatiRecurs(12);
      
      
//  1.3 Мемоизированная функция для нахождения н-ного члена ряда Фибоначи
function fibonatiRecurs(n: number): number {
    let resultFibonati;
    return resultFibonati =  (n <= 1) ?  n : 
    fibonatiRecurs(n - 1) + fibonatiRecurs(n - 2);   
  };
  
  function cacheFibonati(func: any) {
    let cache = new Map();
    return function(resultFibonati: number) {
    if (cache.has(resultFibonati)) {  
      return cache.get(resultFibonati); 
    }
    let result = func(resultFibonati); 
    cache.set(resultFibonati, result); 
    
    return result;
    };
  };
  
  cacheFibonati(fibonatiRecurs);
console.log(fibonatiRecurs(44));



//Задача 2 Реализовать вычисление, периметра/площади, для треугольника, прямоугольника и круга. Реализовать с помощью функций и с помощью классов.
function triangleArea(firstSide: number, secondSide: number, thirdSide: number){
    let halfPerimetr = (firstSide + secondSide + thirdSide)/2; 
    let triangleS =  Math.sqrt(halfPerimetr*(halfPerimetr - firstSide)*(halfPerimetr - secondSide)*(halfPerimetr - thirdSide));
    let result = triangleS.toFixed(2);
    return (firstSide > 0 && secondSide > 0 && thirdSide > 0) ? result : alert("this is impossible triangle"); 
}
console.log(triangleArea(10, 5, 7));
console.log(triangleArea(10, -5, 7));
      
let trianglePerimetr = (firstSide: number, secondSide: number, thirdSide: number) => firstSide + secondSide + thirdSide;
console.log(trianglePerimetr(3, 5, 10));

    
let squareArea = (width: number, height: number): number => width * height;
console.log(squareArea(10, 15));
    
let squarePerimetr = (width: number, height: number): number => width*2 + height*2;
console.log(squareArea(10, 15));
    
    
/*Функции вычисления площади и периметра круга*/
let circleArea = (radius: number) =>  (Math.pow(radius, 2) * Math.PI).toFixed(4);
console.log(circleArea(10));

let circlePerimetr = (radius: number) => (Math.PI * 2 * radius).toFixed(4);
console.log(circlePerimetr(10));


/*  Вычисдения площади и периметра треугольника  с помощью классов  */
class triangleBase{
    firstSide :number;
    secondSide: number;
    thirdSide: number;
    perimetr: number;
    halfPerimetr: number;
    constructor(firstSide: number, secondSide: number, thirdSide: number){
        this.firstSide = firstSide;
        this.secondSide = secondSide;
        this.thirdSide = thirdSide;		
        this.perimetr = firstSide + secondSide + thirdSide;
        this.halfPerimetr = this.perimetr;
    };
    calckArea(){
        return Math.sqrt(this.halfPerimetr*(this.halfPerimetr - this.firstSide)*(this.halfPerimetr - this.secondSide)*(this.halfPerimetr - this.thirdSide))
    };
    get area() {
        return (this.calckArea()).toFixed(2);
    };
};
let triangle = new triangleBase(11, 5, 7);
console.log("Периметр треугольника: " + triangle.perimetr + " " + "Площадь треугольника: " + " / " + triangle.area)

  /*  Вычисдения площади и периметра прямоугольника с помощью классов  */
  class Square {
    height: number;
    width: number;
    area: number;
    perimetr: number;
  constructor(height: number, width: number) {
    this.height = height;
    this.width = width;
    this.area = height * width;
    this.perimetr = height + width;
  }; 
};

let square = new Square(10, 10);
console.log("Периметр прямоугольника: " + square.perimetr + " / " + "Площадь прямоугольника: " + square.area);

    /*  Вычисдения площади и периметра круга с помощью классов  */
class circleBase{
    radius: number;
    constructor(radius: number){
        this.radius = radius;				
    }
    get perimetr(){
        return(2 * Math.PI * this.radius).toFixed(4);	
    }
    get area(){
        return Math.pow(Math.PI * this.radius, 2).toFixed(4);
    };
};
let circle = new circleBase(11);
console.log("Периметр круга: " + circle.perimetr + " " + "Площадь круга: " + circle.area);


// 3 

function getMaxItem(array: number[]): number{
    let maxNum = array[0];
    for(let item of array){
    maxNum = (item > maxNum) ? item : maxNum;
}
    return maxNum;
}
console.log(getMaxItem([1, 2, 3, 10, 0, 11, 0, 15, 16, 0, -2, 41, 2, 31, 39, -1, 6]))
    
    
function getMinValue(array:number[]): number{
    let minItem = array[0];
    for(let item of array ){
        minItem = (item < minItem ) ? item : minItem;
    }   
    return minItem;
}
console.log(getMinValue([1, 2, 3, 10, 0, 11, 0, 15, 16, 0, -2, 41, 2, 31, 39, -1, 6]));


function getNullValue(array: number[]): number{
    let arrayOfNull = [];
        for (let item of array){
        arrayOfNull.length = (item == 0) ? arrayOfNull.push(item) : arrayOfNull.length;
        }
        return arrayOfNull.length; 
    }
    console.log(getNullValue([1, 2, 3, 10, 0, 11, 0, 15, 16, 0, -2, 41, 2, 31, 39, -1, 6]));



function negativeNum(array: number[]){
    let arrayOfNegative = [];
    for (let item of array){
        arrayOfNegative.length = (item <= 0) ? arrayOfNegative.push(item) : arrayOfNegative.length;
    }
return arrayOfNegative.length;
}
console.log(negativeNum([1, 2, 3, 10, 0, 11, 0, 15, 16, 0, -2, 41, 2, 31, 39, -1, 6]));


function positiveNum(array: number[]): number{
    let arrayOfPositive = [];
    for (let item of array){
        arrayOfPositive.length = (item >= 0) ? arrayOfPositive.push(item) : arrayOfPositive.length
    }
return arrayOfPositive.length;
}
console.log(positiveNum([1, 2, 3, 10, 0, 11, 0, 15, 16, 0, -2, 41, 2, 31, 39, -1, 6]));


function findMaxNum(array: number[]): number{
    let maxNum = 0;   
    for(let i = 0; i < array.length; i++){      
        if ( array[i] > maxNum ){
            maxNum = array[i];
        };
    };
    return maxNum;
};
console.log(findMaxNum([1, 2, 3, 10, 0, 11, 0, 15, 16, 0, -2, 41, 2, 31, 39, -1, 6]));
      
      
/* рукурсивная функция для поиска минимального числа */
function findMinNum(array: number[]): number{
    let minNum = Infinity;
    for(let i = 0; i < array.length; i++){
        minNum = (array[i] < minNum) ? array[i] : minNum;
    };
    return minNum;
};
console.log(findMinNum([1, 2, 3, 10, 0, 11, 0, 15, 16, 0, -2, 41, 2, 31, 39, -1, 6]));
      
      
/* рукурсивная функция для поиска положительных чисел */
function findPositiveNum(array: number[]): number{
for(let i = 0; i<array.length; i++){
    if(array[i] <= 0){
        array.splice(i, 1);
    findPositiveNum(array);
    };
};	
    return array.length; 
};
console.log(findPositiveNum([1, 2, 3, 10, 0, 11, 0, -15, 16, 0, -2, 41, 2, 31, 39, -1, 6]));
      
      
/* рукурсивная функция для поиска отрицательных чисел */
function findNegativeNum(array: number[]): number{
for(let i = 0; i < array.length; i++){
    if(array[i] >= 0){
        array.splice(i, 1);
    findNegativeNum(array);
    };
};	
    return array.length; 

};
console.log(findNegativeNum([1, 2, 3, 10, 0, 11, 0, -15, 16, 0, -2, 41, 2, 31, 39, -1, 6]));

function findNullNum(array: number[]): number{
    for(let i = 0; i < array.length; i++){
        if(array[i] == 0){
            array.splice(i, 1);
        findNegativeNum(array);
    };
};	
    return array.length;

}
console.log(findNullNum([1, 2, 3, 10, 0, 11, 0, -15, 16, 0, -2, 41, 2, 31, 39, -1, 6]));
        
        
function recursiveArrayCount(arr: number[], count: number): number {
    if (arr.length == 0) {
        return 0;
    } else {
    arr.pop();
    return count + recursiveArrayCount(arr, count);
    };
};
let myArray = [1, 10, 23, 11, 4, 48, 88];
console.log(recursiveArrayCount(myArray, 1));

// 5
function factorial(number: number): number{
    let result = (number != 1) ? 
    number * factorial(number - 1) : number;
    return result;
};
console.log(factorial(5));

function factorialMemo(number: number): number{
    let result = (number != 1) ? number * factorialMemo(number - 1) : number;
    return result;
}

function cacheFactorial(func: any){
  let cache = new Map();
  return function(resultOfFactorial: number) {
    if (cache.has(resultOfFactorial)) {  
      return cache.get(resultOfFactorial);          
    }
    let result = func(resultOfFactorial);
    cache.set(resultOfFactorial, result);        
      return result;
  };
};

cacheFactorial(factorialMemo);
console.log(factorialMemo(5));


let matrix: Array<any> = [
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9]
];
let newArray = matrix.map((element, i) => element.map((element2: number, j: number) => matrix[j][i]));
console.log(newArray);


/*Сложение матриц*/

function sumMatrix(firstMatrix: Array<any>, secondMatrix: Array<any>): Array<any>{   
    let sumOfMatrix: Array<any> = [];
    for (let i = 0; i < firstMatrix.length; i++){
         sumOfMatrix[ i ] = [];
       for (let j = 0; j < firstMatrix[0].length; j++){
           sumOfMatrix[i][j] = firstMatrix[i][j] + secondMatrix[i][j];
       }           
     }
    return sumOfMatrix;
};
let firstMatrix = [
[1, 2, 34],
[5, 6, 145],
];
let secondMatrix = [
[5, -2, -57],
[0, 7, 784],
];
console.log(sumMatrix(firstMatrix, secondMatrix));

//7
let matrix: Array<any> = [
    [1, 2, 3, 4, 5],
    [5, 0, 4, 6, 3],
    [0, 1, 1, 0, 3],
    [1, 1, 2, 3, 4],
];
function deleteString(matrix: Array<any>): number[]{ 
    let indexOfNull: number[] = [];
    for (let i: number = 0; i < matrix.length; i++){
        for(let j: number = 0; j < matrix[i].length; j++){
            if (matrix[i][j] == 0 && !indexOfNull.includes(j)){         
                indexOfNull.push(j);          
            };        
        };
    };
    function compareNumeric(a: number, b: number): any {
    return (a < b) ? 1 : (a > b) ? -1 : (a == b) ? 0  : "Error";  
};
indexOfNull.sort(compareNumeric);
    for (let i = 0; i < matrix.length; i++){
        for(let item of indexOfNull){
            matrix[i].splice(item, 1);            
        };    
    };

return matrix;
};
console.log(deleteString(matrix));



let matrix: Array<any> = [
    [1, 2, 3, 4, 5],
    [5, 0, 4, 6, 3],
    [0, 1, 1, 0, 3],
    [1, 1, 2, 3, 4],
    ];
function deleteString(matrix: Array<any>): number[]{
    for (let i = 0; i < matrix.length; i++){
        if (matrix[i].includes(0)){
    matrix.splice(i, 1)
    i = 0;
    };  
    };
    return matrix;
};
console.log(deleteString(matrix));

type User = {
name: string;
sername: string; 
};

let person: User = {
name: "name",
sername: "sername",
};          
       
function newBind(targetFn: any, context: any): any {
    return function(...args: Array<any>): string{
        const dateString = Date.now().toString(); // уникальная строка
        context[dateString] = targetFn; // помещаем в значение уникального поля нужную функцию
        let result = context[dateString](); // вызов функции в значеии уникального поля
        delete context[dateString]; // после отработи функции удаляем её из объекта
        return result; // возращаем результат функции
    };
};

function func(): void{
    alert(this.name);  
};
newBind(func, person)();


let user = { name: "John" };
let admin = { name: "Admin" };
function myCall(targetFn, context) {
    const dateString = Date.now().toString();
    context[dateString] = targetFn;
    let result = context[dateString]();
    delete context[dateString];
    return result;
};
function personName() {
    let personName = this.name;
    console.log(personName);
};
myCall(personName, admin);

 /*forEach*/
 let number: number[] = [1, 2, 3, 4, 5];
 let newArray: number[] = [];
 function forEachh(array: number[]): number[]{
   for(let item of array){
       newArray.push(item*3.14)
   };
   return  newArray;
 
 };
 console.log(forEachh(number));





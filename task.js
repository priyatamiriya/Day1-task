/* Variables (var / let / const)*/

var username = "priya";         
const age = 21;           

if (true) {
    let username = "srii";       
    const city = "Hyderabad";    
               
    console.log(`username: ${username}`);
    console.log(`age: ${age}`);
    console.log(`city: ${city}`);
} 

/* Data Types */

// String
var name = "Priya";

// Number
const agee = 20;

// Boolean
var isActive = true;

// Undefined
var x;


// Null
const salary = null;

// Object
let person = {
    username: "Priya",
    age: 22
};

// Array
var colors = ["red", "green", "blue"];

// Date
const today = new Date();


console.log("String:", name);
console.log("Number:", agee);
console.log("Boolean:", isActive);
console.log("Undefined:", x);
console.log("Null:", salary);
console.log("Object:", person);
console.log("Array:", colors);
console.log("Date:", today);



/* Functions & Arrow Functions */

/* Traditional functions */
function display(){
    console.log("Hello World");
}
display();


/* Parameters */
function displayName(username) {
    console.log(`Hello ${username}, Welcome to Bizcredence`);
}

displayName("Priyaaa");
console.log(displayName("priyaaa"));


/* functional expression */
var displayExp = function () {
    console.log("Hello world");
}
displayExp();


/* Immediately invoke function */
(function(){
    console.log("Hello priya");
})();

/* Arrow function */
var displayArrow = (username)=>"Hello " + username +" welcome to Bizcredence"
console.log(displayArrow("priyaa"))



/* Arrays & Objects */

let marvelnames = ["Ironman", "capt America", "Thor", "Black panther", "Hulk"];

let [FirstHero, secondHero, ...restHeros] = marvelnames;

console.log(restHeros);



/* array Methods */

let marvel = ["Ironman","capt America","Thor","Black panther","Hulk","Black watch"];
console.log(marvel.indexOf("Thor"));


marvel =["Ironman","capt America","Thor","Black panther","Hulk","Black watch"]
var newheros = marvel.slice(2,5);
console.log(newheros)


var arr = [5,6,7,12,30,42,21];
arr.forEach(multiplywith5);
function multiplywith5(i){
    console.log(i*5);
}



var arr = [5,6,7,12,30,42,21];
var newarr = arr.filter((i)=>i%2==0)
console.log(newarr)



var arr = [5,6,7,12,30,42,21];
var sumofnums = arr.reduce((acc,i)=>acc+i,10)
console.log(sumofnums) 


var arr = [5,6,7,12,30,42,21];
var newarr = arr.map((i)=>i*5)
console.log(newarr)


var newarr2 = marvel.map((i) => i.toUpperCase());
console.log(newarr2);
 

/* objects */

var obj = {
    id: 12,
    firstname: "priyaa",
    lastname: "tamiriya",
    address: "palasa"
};
console.log(obj.firstname);     


//new object
var mobile = new Object();
mobile.mobileName = "oneplus";
console.log(mobile);




// Constructor function
function Mobile(mobileName, mobileModel, mobileProcessor, mobilePrice) {
    this.mobileName = mobileName;
    this.mobileModel = mobileModel;
    this.mobileProcessor = mobileProcessor;
    this.mobilePrice = mobilePrice;
}


var m1 = new Mobile("OnePlus", "8 Pro", "Snapdragon 865", 35000);
var m2 = new Mobile("Apple", "12", "A15 Bionic", 85000);
var m3 = new Mobile("Samsung", "S24", "Snapdragon 8 Gen 3", 45000);


var mobiles = [m1, m2, m3];


for (let key of mobiles) {
    console.log(key);
}


console.log("Mobiles under 40000:");
for (let mob of mobiles) {
    if (mob.mobilePrice > 40000) {
        console.log(mob.mobileName + " : " + mob.mobilePrice);
    }
}



/* shallow copy */
var person1 = {
    firstname:"ojas",
    lastname : "Gambheera",
    address : {
        city:"hyderabad",
        pincode: "2345656"
    }
}

var PK = { ...person1 };   

PK.firstname = "0";
PK.address.city = "Japan";

console.log(PK.address.city);       
console.log(person1.address.city);   



/* Deep copy */

var pspk = JSON.parse(JSON.stringify(person1))
pspk.address.city="JAPAN"
console.log(person1)



/* Loops (for, while, forEach) */

//for loop

for (let i = 1; i <= 10; i++) {
    console.log(i);
}



let marvelheros = ["Ironman", "Thor", "Hulk", "Captain America"];

for (let i = 0; i < marvelheros.length; i++) {
    console.log(marvelheros[i]);
}



//while loop

let i=0;
while (i<=10){
    console.log(i);
    i++
}


let n=232,count=0;
while(n!=0){
    n=parseInt(n/10)
    count++;
}
console.log(count); 



//forEach loop

var names = ["Priya", "srii", "maghi"];

names.forEach(function(name, index) {
    console.log(index + " : " + name);
});


var nums = [10, 20, 30, 40];

nums.forEach(function(value) {
    console.log(value);
});



/* Conditional Statements */
/*IF Statement*/

var a=4;
if(a%2==0){
    console.log(`${a} is even`);
}

/*if else */
var a=5;
if(a%2==0){
    console.log(`${a} is even`);
}
else{
    console.log(`${a} is odd`)
}

/*if else ladder */
 // FizzBuzz

var num = 9;

if (num % 3 == 0 && num % 5 == 0) {
    console.log("FizzBuzz");
}
else if (num % 3 == 0) {
    console.log("Fizz");
}
else if (num % 5 == 0) {
    console.log("Buzz");
}
else {
    console.log("Invalid");
}



/* Nested if else */

// Biggest of 3 Numbers

var x1 = 5;
var x2 = 6;
var x3 = 7;

if (x1 > x2) {
    if (x1 > x3) {
        console.log(x1);
    } else {
        console.log(x3);
    }
} 
else {
    if (x2 > x3) {
        console.log(x2);
    } else {
        console.log(x3);
    }
}




// Switch Case - Days

var day = 3;

switch (day) {
    case 0:
        console.log("Sunday");
        break;

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    default:
        console.log("Holiday");
}

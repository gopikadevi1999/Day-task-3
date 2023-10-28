//how to compare two json  have the same properties without order?
//let obj1={name:"person 1",age:5};
//let obj2={age:5,name:"person 1"};

var obj1 = { name: "person 1", age: 5 };
var obj2 = { age: 5, name: "person 1" };
// Convert the JSON objects to strings and sort them
var str1 = JSON.stringify(obj1,Object.keys(obj1).sort());
var str2 = JSON.stringify(obj2,Object.keys(obj2).sort());
if (str1===str2) {
  console.log("equal");
} else {
  console.log("not equal");
}

//Question.2
var request = new XMLHttpRequest();
//*step 2:- Opening a connection to the server
request.open("GET","https://restcountries.com/v3.1/all",true)
//?step 3:- Initiating a bridge to the server / sending a request / sending a connection
request.send();
//!step 4:- server response
request.onload = function(){
    var data = request.response;
    //console.log(data);
    var result = JSON.parse(data);
    console.log(result);
    //console.log(result[0].name.common);
    //console.log(result[249].area);
    //for accessing multiple values use looping
    for(var i=0;i<result.length;i++){
        console.log(result[i].flags);
    }
}

//Question.2
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload = function(){
    var data = request.response;
    var result = JSON.parse(data);
    console.log(result);
    //console.log(result[0].name.common);
    //console.log(result[249].area);
    for(var i=0;i<result.length;i++){
      console.log(result[i].name.common,result[i].region,result[i].subregion,result[i].population);    
        
    }
}

//Task 1: Simple Programs todo for variables

//1.Declare four variables without assigning values and print them in console.

var a4;
var b4;
var c4;
var d4;
console.log(a4);
console.log(b4);
console.log(c4);
console.log(d4);

//2.How to get value of the variable myvar as output.

var myvar = 24;
console.log(myvar);

//3.Declare variables to store your first name, last name, marital status, country and age in multiple lines.

var firstName = "Gopikadevi";
var lastName = "Radhakrishnan";
var maritailStatus = "Single";
var country = "India";
var age = 24;
console.log(firstName);
console.log(lastName);
console.log(maritailStatus);
console.log(country);
console.log(age);

//4.Declare variables to store your first name, last name, marital status, country and age in a single line.

var firstName = "Gopikadevi", lastName = "Radhakrishnan", maritailStatus = "Single", country = "India", age = 24;
console.log(firstName+","+lastName+","+maritailStatus+","+country+","+age);

//5.Declare variables and assign string, boolean, undefined and null data types.

var myAge = 24;            // Number data type
var areYouOlder = true;     // Boolean data type
var yourAge;                // Undefined data type 
var myFriendAge = null;     // Null data type
console.log("I am 24 years old.");
console.log("You are 30 years old.");
console.log(yourAge);
console.log(myFriendAge);

//6.Convert the string to integer.

//parseInt()
var a = "24";
var b = parseInt(a);
console.log(b);

//Number
var b = "24";
var c = Number(b);
console.log(c);

//plus sign+
var c = "24";
var d = +c;
console.log(d);



//Task 2: Simple Programs todo for Operators

//1.Square of a number.

var a1 = 5;
var Square = a1*a1;
console.log(Square);


//2.Swapping 2 numbers.

var a2 = 2;
var b2 = 4;
console.log("a2=",b2);
console.log("b2=",a2);


//3.Addition of 3 numbers.

var a3 = 3, b3 = 4; c3 = 5;
console.log(a3+b3+c3);


//4.Celsius to Fahrenheit conversion.

var celsius = 24;
var fahernheit = (celsius * 9/5) + 32;
console.log(fahernheit);


//5.Meter to miles.

var meter = 150;
var miles = meter/150;
console.log(miles);


//6.Pounds to kg.

var pounds = 10;
var kilograms = pounds * 0.0045359237;
console.log(kilograms);


//7.Calculate Batting Average.

var runScored = 287;
var timesDismissed = 15;
var battingAvarage = runScored / timesDismissed;
console.log(battingAvarage);


//8.Calculate five test scores and print their average

var english = 85;
var tamil = 87;
var maths = 90;
var science = 87;
var social = 92;
var testScored = english + tamil + maths + science + social;
var averageScore = testScored / 5;
console.log(averageScore);


//9.Power of any number x ^ y.

var x = 7;
var y = 4;
var result = x ** y;
console.log(result);


//10.Calculate Simple Interest.

//Simple Interest (I) = (Principal Amount * Rate * Time) / 100
var principalAmount = 500;
var rate = 5;
var time = 3;
var simpleInterest = (principalAmount * rate * time) / 100;
console.log(simpleInterest);


//11.Calculate area of an equilateral triangle

//Area (A) = (sideLength^2 * √3) / 4
var sideLength = 6;
var area = (Math.pow(sideLength,2) * Math.sqrt(3)) / 4;
console.log(area);


//12.Area Of Isosceles Triangle.

//Area (A) = (b * h) / 2
var base = 9;
var height =7;
var area = (base * height) / 2;
console.log(area);

//13.Volume Of Sphere.

//Volume (V) = (4/3) * π(Math.PI) * r^3 (^ Math.pow)
//'π' (pi) is approximately equal to 3.14159.
//'r' is the radius of the sphere.
var radius = 4;
var Volume = (4/3) * Math.PI * Math.pow(radius, 3);
console.log(Volume);

//14.Volume Of Prism.

//Volume (V) = Base Area (A) × Height (h)
var baseArea = 30;
var Height = 20;
var Volume = baseArea * Height
console.log(Volume);


//15.Find area of a triangle.

//Area (A) = (1/2) * base * height
var base1 = 40;
var height1 = 20;
var area1 = base1 * height1 * (1/2);
console.log(area1);


//16.Give the Actual cost and Sold cost, Calculate Discount Of Product

//Discount = Actual Cost - Sold Cost
var actualCost = 100;
var soldCost = 90;
var discount = actualCost - soldCost;
console.log(discount);


//17.Given their radius of a circle and find its diameter, circumference and area.

//Diameter (D) = 2 * Radius
//Circumference (C) = 2 * π * Radius
//Area (A) = π * Radius^2
var radius = 6;
var diameter = 2 * radius
var Circumference = 2 * Math.PI * radius;
var area2 = Math.PI * Math.pow(radius,2);
console.log(diameter);
console.log(Circumference);
console.log(area2);


//18.Given two numbers and perform all arithmetic operations.

var num1 = 34;
var num2 = 24;
var sum = num1 + num2;
var sub = num1 - num2;
var product = num1 * num2;
var quotient = num1 / num2;
var modulus = num1 % num2;
console.log(sum);
console.log(sub);
console.log(quotient);
console.log(modulus);
console.log(product);


//19.Display the asterisk pattern as shown below(No loop needed):
//*****
//*****
//*****
//*****
//*****

console.log("*****");
console.log("*****");
console.log("*****");
console.log("*****");
console.log("*****");

//20.Calculate electricity bill?
//For example, a consumer consumes 100 watts per hour daily for one month. Calculate the total energy bill of that consumer if per unit rate is 10?

//Total Energy (kWh) = (100 watts / 1000) * 30 days = 3 kWh
//Total Cost = Total Energy (kWh) * Rate per Unit
//Total Cost = 3 kWh * 10 = 30
var watts = 100;
var ratePerUnit = 10;
var totalEnergy = (100/1000)*30;//(30days)
var totalcost  = totalEnergy *ratePerUnit;
console.log(totalcost);


//21.Program To Calculate CGPA.

//cgpa = totalGradePoints / totalCourses;
var gradePoint1 = 4.0;
var gradePoint2 = 3.5;
var gradePoint3 = 3.0;
var gradePoint4 = 4.5;
var totalCourses = 4;
var totalGradePoints = gradePoint1 + gradePoint2 + gradePoint3 + gradePoint4;
var cgpa = totalGradePoints / totalCourses;
console.log(cgpa);

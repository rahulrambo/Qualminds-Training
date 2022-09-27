// "use strict"
console.log("Hello world from Object2 file");
n=90;
console.log(n);
var x;
var y;
function fun(x,y) {
    return x+y;
}
console.log(fun(6,5));
console.log(typeof fun);

//Other way of Creating a Function
var check=function(){
    //console.log("Good Morning");
    return "Hello World"
}
check();
console.log(typeof check);
console.log(check());
console.log(check);
var result=check;
result();
console.log(typeof result());
console.log(result);
var result1=result;
console.log(typeof result1);
var add=function (number1, number2) {
    return number1+number2;
}
var sum=add;
console.log(sum(2,3,5,6));//It will take only first two parameters
console.log(sum(1));

var num=0;//For any value other than 0,undefined,NaN the first condition we'll be satisfied only
if(num){
    console.log("Number is equal to 1");
}
else{
    console.log("Number is not equal to 1");
}

var day=7;
switch(day){
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
    case 7: 
        console.log("Sunday");
        break;
    default:
        console.log("Invalid data");
}

//For ternary Operator 
var mul=5;
mul==6 ? console.log("Equal") : console.log("Not Equal");

var x1=5.1;
var x2=10.2;
var x3=x1+x2;
console.log(x3.toFixed(2));

//For Arrays
var arr=[10,20,30,40];
let element=20;
let position=arr.indexOf(element);
if(position===-1){
    console.log(element+" is not present in the Array");
}
else{
    console.log(element+" is present at position "+position);
}

//Splice and Slice Properties of Arrays
//Splice remove the particular element and change the real array
//But Slice make the copy of the element and do not chnage the Array
var arr1=[1,2,3,4,5,6];
//var arr2=arr1.splice(2,3); //Using Splice first term show the position of that Array and second one is for the number of elements
var arr3=arr1.slice(2,5); //Using slice we can copy the element from Array and it doesn't affect the Array and it will give output as first element and upto before that second term
//console.log(arr2);
console.log(arr3);
console.log(arr1);

//Filter the Array
var newArray=[30,40,50,10,20,60];
var updatedArray=[];
newArray.forEach(function(element){
    if(element>=30){
        updatedArray.push(element);
    }   
})
console.log(updatedArray);
var realArray=newArray.filter(function(element){
    return element>30;
})
console.log(realArray);
console.log(newArray);
let firstName="Rambo";
let lastName="Rahul";
let text=`Welcome ${firstName} ${lastName}`;
console.log(text);
let newx=231;
let newy=newx.toString();
let newy1=(125).toString();
let newy2=(125+45).toString();
console.log(newy);
console.log(newy1);
console.log(newy2);

let x8 = 9.656;
console.log(x8.toExponential(2));
console.log(x8.toExponential(4));
console.log(x8.toExponential(6));

var _arr=[12,36,96,85,47];
var _newArr=_arr.filter(function(element){
    return element>50;
})
console.log(_newArr);
console.log(_arr);

var _arr1=[10,20,30,60,50,40,80];
var _newArr1=_arr1.map(function(element){
    return element*10;
})
var _newArr2=_arr1.map(function(element){
    return element>50;
})
console.log(_newArr1);//The output will come as the product of 10
console.log(_newArr2);//It will give the Output as true and false

var _arr3=[25,36,96,85,74,14];
var revArr=_arr3.reverse();
console.log(revArr);
console.log(_arr3);

var _arr3=[36,98,57,42];
var _newArr3=["Ram","Mohan","Shyam","Rohan"];
var _newOne=_newArr3.concat(_arr3);
var _newOne1=_arr3.concat(_newArr3);
// var _newOne2=_newArr3.join("\\");
var _newOne2=_newArr3.join(" C ");
console.log(_newOne);
console.log(_newOne1);
console.log(_newOne2);

var arrSum=[10,20,30,40,50];
var total=0;
arrSum.forEach(function(element){
    total=total+element;
})
console.log(total);

var a=[1,2,3,4,5];
var _a=a.reduce(function(_a,element){
    return _a+element;
})
console.log(_a);







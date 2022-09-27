function myfun() {
    document.getElementById("demo").innerHTML = "Paragraph Changed";
}
console.log("Hello Dear");
function newOne() {
    let x, y, z;
    x = 5;
    y = 6;
    z = x + y;
    console.log(z);
    var x1 = "hello";
    let a = "Rambo";
    let b = "Rahul";
    let _a = 3;
    {
        let _a = 4;
    }
    {
        let _a = 5;
    }
    const games = ["Cricket", "Football", "Chess", "Kabaddi"];
    games[0] = "Kho-Kho";
    games.push("Volley-ball");

    const car = {
        type: "Fiat", model: "500", color: "White"
    };
    car.color = "black";

    document.getElementById("p1").innerHTML = "The value of z after addition is " + z;
    document.getElementById("p2").innerHTML = z + z + x1 + z + z;
    document.getElementById("p3").innerHTML = a + " " + b;
    document.getElementById("p4").innerHTML = 5 + 2 + "3" + 8 + 9;
    document.getElementById("p5").innerHTML = _a;
    document.getElementById("p6").innerHTML = "The games which are available in the Array are:" + games;
    document.getElementById("p7").innerHTML = "The color of the car is " + car.color;

    let s = newfun(4, 3)
    function newfun(m, n) {
        return m + n;
    }
    document.getElementById("p8").innerHTML = s;
    console.log(5 * '3');
    console.log(typeof (52));
    console.log(5 - 'he');
    console.log('go' - '9');
    const time = 15;
    if (time < 10) {
        console.log("Good Morning");
    }
    else if (time < 19) {
        console.log("Good Evening");
    }
    else if (time < 22) {
        console.log("Good Night");
    }
    else {
        console.log("Invalid time");
    }
    // let result;
    // const choose1 = parseInt(prompt("Enter first number"));
    // const choose2 = parseInt(prompt("Enter second number"));
    // const operate = prompt("Enter operator ( either +, -, * or / ): ");
    // switch (operate) {
    //     case '+':
    //         result = choose1 + choose2;
    //         console.log(result);
    //         break;
    //     case '-':
    //         result = choose1 - choose2;
    //         console.log(result);
    //         break;
    //     case '*':
    //         result = choose1 * choose2;
    //         console.log(result);
    //         break;
    //     case '*':
    //         result = choose1 * choose2;
    //         console.log(result);5
    //         break;
    //     default:
    //         console.log("Invalid data");
    //         break;
    // }
}

newOne();
let x1 = function (num) {
    return Math.sqrt(num);
}
console.log(x1(16));

let number = 5;
let i;
for (i = number; i > 0; i--) {
    console.log(i);
}

function myfunction(num1){
    console.log(num1);
    const newnum=num1-1;
    if(newnum>0){
        myfunction(newnum);
    }
}
myfunction(4);

let num2=5;
let fact=1;
for(i=num2;i>=1;i--){
    fact *= i;
}
console.log(fact);

function factorial(num3){
    if(num3==0 || num3==1){
        return 1;
    }
    else{
        return num3*factorial(num3-1);
    }
}
console.log(factorial(6));

const obj={
    name:"Rambo",
    age:23,
    greet:function(){
        console.log("Name of the Person is "+" "+this.name);
    }
}
console.log(obj.age);
obj.greet();
let firstNum=0,secondNum=1;
for(i=0;i<=6;i++){
    console.log(firstNum+",");
    let result1=firstNum+secondNum;
    firstNum=secondNum;
    secondNum=result1;
}

function toCelcius(f){
    return (5/9)*(f-32);
}
// console.log(toCelcius(77));
document.getElementById("p9").innerHTML=toCelcius(77);

const realName={
    firstName:"Rambo",
    lastName:"Rahul",
    fullName:function(){
        return this.firstName+" "+this.lastName;
    }
}
// document.getElementById("p10").innerHTML=realName.fullName();
function time1(){
    let dt=new Date();
    let tt=`${dt.getHours()}:${dt.getMinutes()}:${dt.getSeconds()}`
    document.getElementById("p11").innerHTML=tt;

}
function time2(){
    let dt=new Date();
    let tt=`${dt.getHours()}:${dt.getMinutes()}:${dt.getSeconds()}`
    document.getElementById("p12").innerHTML=tt;
    
}
setInterval(time2,1000);
// onclick=document.getElementById("p11").innerHTML=Date();
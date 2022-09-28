console.log("Hello World from Object1 file");
function click1(){
    let dt=new Date();
    let tt=`${dt.getDate()}`
    console.log(tt);
    document.getElementById("d1").innerHTML=tt;
}
document.getElementById("d2").innerHTML="Rambo\" 'Rahul'";
let text1="Rambo rahul has gone";
let len1=text1.length;
console.log(text1[len1-1]);
console.log(text1.lastIndexOf("rahul"));
console.log(text1.endsWith("o"));
let text2="Rahul";
let text3=text1.concat(" "+text2);
document.getElementById("d3").innerHTML=text3; 
document.getElementById("d3").innerHTML=text3.length;

var employee={
    name:"Rahul",
    name1:"Rambo",
    gender:"Male",
    location:"Bihar",    
    position:"Software Engineer",
    hobbies:{
        sports:'Cricket',
        enjoy:'Music'
    },
    key:'key',
    welcome:function(){
        console.log("Good Morning "+employee.name);
    },
    _welcome:function(){
        console.log("Welcome "+employee.name1+" "+employee.name+" to my first Js program");
    }
};
console.log(employee.hobbies);
console.log(employee.position);
console.log(employee['location']);
console.log(employee[location]);
console.log(typeof employee);
console.log(typeof employee.gender);
var key='name';
console.log(employee['key']);//It will search key object in the Employee and print key
console.log(employee[key]);//it will print as Name which is mentioned in object
employee.welcome();
employee._welcome();
function click1(){
    let dt=new Date();
    let tt=`${dt.getDate()}`
    console.log(tt);
    document.getElementById("d1").innerHTML=tt;
}
document.getElementById("d2").innerHTML="Rambo\" 'Rahul'";
let text1="Rambo rahul has gone rahul";
let len1=text1.length;
console.log(text1[len1-1]);
console.log(text1.lastIndexOf("rahul"));
console.log(text1.endsWith("o"));
let text2="Rahul";
let text3=text1.concat(" "+text2);
document.getElementById("d3").innerHTML=text3;
// document.getElementById("d3").innerHTML=text3.length;
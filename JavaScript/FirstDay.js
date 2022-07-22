function myfun(){
    document.getElementById("demo").innerHTML="Paragraph Changed";
}
console.log("Hello Dear");
function newOne(){
    let x,y,z;
    x=5;
    y=6;
    z=x+y;
    console.log(z);
    var x1="hello";
    let a="Rambo";
    let b="Rahul";
    let _a=3;
    {
        let _a=4;
    }
    {
        let _a=5;
    }
    const games=["Cricket","Football","Chess","Kabaddi"];
    games[0]="Kho-Kho";
    games.push("Volley-ball");

    const car={
        type:"Fiat",model:"500",color:"White"
    };
    car.color="black";

    document.getElementById("p1").innerHTML="The value of z after addition is "+z;
    document.getElementById("p2").innerHTML=z+z+x1+z+z;
    document.getElementById("p3").innerHTML=a+" "+b;
    document.getElementById("p4").innerHTML=5+2+"3"+8+9;
    document.getElementById("p5").innerHTML=_a;
    document.getElementById("p6").innerHTML="The games which are available in the Array are:"+games;
    document.getElementById("p7").innerHTML="The color of the car is "+car.color;

    let s=newfun(4,3)
    function newfun(m,n){
        return m+n;
    }
    document.getElementById("p8").innerHTML=s;

}
newOne();
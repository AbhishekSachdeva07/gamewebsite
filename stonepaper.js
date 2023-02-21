let a = document.getElementById("btn1");
let b = document.getElementById("btn2");
let c = document.getElementById("btn3");
let d=document.getElementById("input");
let e=document.getElementById("input3");
let f=document.getElementById("input4");
var user=0,comp=0;
b.addEventListener("click",ff);
a.addEventListener("click",gg);
c.addEventListener("click",ll);
function gg(){
    var value=1;
    let bc= Math.floor(Math.random()*3)+1;
    d.value=bc;
    if (value==bc){}
    else if(value==1 && bc==3){user=user+1;}
    else if(value==1 && bc==2){comp=comp+1;}
    console.log(user,comp);
    e.value="User--> "+user+" Comp--> "+comp;
    if (user>comp){
        f.value="You are leading the game";
    }
    else if(user<comp){
        f.value="You are losing the game";
    }else{
        f.value="It's at draw";
    }
    
}
function ff(){
    var value=2;
    let bc= Math.floor(Math.random()*3)+1;
    d.value=bc;
    if (value==bc){}
    else if(value==2 && bc==1){user=user+1;}
    else if(value==2 && bc==3){comp=comp+1;}
    //console.log(user,comp);
    e.value="User--> "+user+" Comp--> "+comp;
    if (user>comp){
        f.value="You are leading the game";
    }
    else if(user<comp){
        f.value="You are losing the game";
    }else{
        f.value="It's at draw";
    }
    
}
function ll(){
    var value=3;
    let bc= Math.floor(Math.random()*3)+1;
    d.value=bc;
    if (value==bc){}
    else if(value==3 && bc==2){user=user+1;}
    else if(value==3 && bc==1){comp=comp+1;}
    console.log(user,comp);
    e.value="User--> "+user+" Comp--> "+comp;
    if (user>comp){
        f.value="You are leading the game";
    }
    else if(user<comp){
        f.value="You are losing the game";
    }else{
        f.value="It's at draw";
    }
    
}


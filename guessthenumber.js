let a= document.getElementById("range");
let b= document.getElementById("done");
b.addEventListener("click",gf);
let c = Math.floor(Math.random()*101)
let d = document.getElementById("noo");
let f=0;

function gf(){
    f=f+1
    if(a.value>100 || a.value<0){
        alert("You must enter between 0-100")
    }
    else if(a.value>=0 && a.value<=100){
        if (a.value>c){
            console.log(c);
            d.value="You guessed higher guess somewhat lower.";
        }
        else if (a.value<c){
            console.log(c);
            d.value="You guessed lower guess somewhat higer.";
        }
        else if (a.value==c){
            console.log(c);
            d.value="You did this in "+f +" times. You won the game.";
            alert("You need to reload the website to play the game again");
        }
    }
}

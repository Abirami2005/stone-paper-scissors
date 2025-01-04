// let y=Math.floor(Math.random()*3)+1;
const u=document.getElementById("comp");
const a=document.getElementById("a");
const b=document.getElementById("b");
const c=document.getElementById("c");
const v=document.getElementById("player");
const w=document.getElementById("res");
const r=document.getElementById("r");
const z=document.getElementById("z");
var n=0;
var x=0;
a.addEventListener("click",event =>{
    v.textContent="Player: ";
   v.textContent+="rock";
   mop();
});
b.addEventListener("click",event =>{
    v.textContent="Player: ";
    v.textContent+="paper";
    mop();
    
 });
c.addEventListener("click",event =>{
    v.textContent="Player: ";
    v.textContent+="scissors";
    mop();
    
 });
function mop(){
    let y=Math.floor(Math.random()*3)+1;
    var q=v.textContent.length;
    var g=v.textContent.slice(8,q);
    if(y==1){
        u.textContent="Computer: ";
        u.textContent+="rock";
        var k=u.textContent.length;
        var m=u.textContent.slice(10,k);
    }
    else if(y==2){
        u.textContent="Computer: ";
        u.textContent+="paper";
        var k=u.textContent.length;
        var m=u.textContent.slice(10,k);
    }
    else{
        u.textContent="Computer: ";
        u.textContent+="scissors";
        var k=u.textContent.length;
        var m=u.textContent.slice(10,k);
    }
        if(g===m){
            w.textContent="IT'S A TIE👔";
            w.style.color="blue";
            }
        else if(g=="rock" && m=="scissors" || g=="paper" && m=="rock"|| g=="scissors" && m=="paper"){
               w.textContent="YOU WIN!!";
               w.style.color="green";
               x=x+1;
               r.textContent="PLAYER SCORE: ";
               r.textContent+=x;
            }
        else{
                w.textContent="YOU LOSE😒";
                w.style.color="red";
                n=n+1;
                z.textContent="COMPUTER SCORE: ";
                z.textContent+=n;
            }
 }

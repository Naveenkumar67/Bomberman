var root=document.getElementById("pa");
var count=0;
var k=0;
let row=9;
let column=9;
let bomb=10;
window.random=[];
for (let i = 0; i < bomb; i++) {
    let temp = Math.floor(Math.random() * 81) + 1;
    while (window.random.includes(temp)) {
        temp = Math.floor(Math.random() * 81) + 1;
    }
    window.random.push("cell_"+temp);
}
console.log(window.random);
function green(x){
    
    let ele=document.getElementById(x);
    ele.style.backgroundColor='green';
    ele.innerHTML='1';
    ele.removeEventListener("click",res);
    
}
function removeEl(){
    for( var i=1;i<=row*column;i++){
        let ele=document.getElementById("cell_"+i);
        ele.removeEventListener("click",res);
    }
}
function res(event){
  let ele=event.target.id;
  if(count==71){
        display('Win');
    }
    else{
  if(isBomb(ele)){
     //showBomb();
     display("game over")
  }
  else{
    count++;
    let h=document.getElementById("gameScore");
    h.innerHTML=count;
    green(ele);
    
  }
}

}
function isBomb(x){
    return window.random.includes(x);
}
function showBomb(){
    for(var i=0;i<bomb;i++){
        let ele=document.getElementById(window.random[i]);
         ele.style.backgroundImage="url(https://img.icons8.com/emoji/48/000000/bomb-emoji.png)";
        ele.style.backgroundColor="red";
       
    }

    
}
function display(x){
    removeEl();
    if(x=='win'){
        let h=document.getElementById("resultDisplay");
        h.innerHTML=x;
    }
    else{
    showBomb();
    let h=document.getElementById("resultDisplay");
    h.innerHTML=x;
    }
}
function reset(){
    for(var i=1;i<=row*column;i++){
        let ele=document.getElementById("cell_"+i);
        ele.addEventListener("click",res);
        ele.removeAttribute("style");
        ele.innerHTML="";
        count=0;
    }
    document.getElementById("gameScore").innerHTML="";
    document.getElementById("resultDisplay").innerHTML="";
    while(window.random.length>0){
        window.random.pop();
    }
    for (let i = 0; i < bomb; i++) {
    let temp = Math.floor(Math.random() * 81) + 1;
    while (window.random.includes(temp)) {
        temp = Math.floor(Math.random() * 81) + 1;
    }
    window.random.push("cell_"+temp);
}   
}
for(var i=0;i<row;i++){
    for(var j=0;j<column;j++){
        k++;
        const ele=document.createElement("div");
        ele.setAttribute("class","cell");
        ele.setAttribute("id","cell_"+(k));
        ele.addEventListener("click",res);
        root.appendChild(ele);
    }
}
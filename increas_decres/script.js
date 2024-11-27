

 const decresbtn = document.getElementById("decresbtn");
 const restbtn = document.getElementById("ressbtn");
//  const incresbtn = document.getElementById("incresbtn");
 const contlable = document.getElementById("contLabel");

 let count = 0;


 document.getElementById("incresbtn").onclick = function(){
    count++;
    contlable.textContent = count;
 }

 restbtn.onclick = function(){
    count = 0;
    contlable.textContent = count;
 }

 decresbtn.onclick = function(){
    count--;
    contlable.textContent = count;
 }

 console.log("hello i am zakaria")
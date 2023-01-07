var sum=0;
var total =document.getElementById("total");

function add(e){
var price=e;
sum+=price;
total.innerText=sum;
}

function rest(){
    sum=0;
    total.innerText=sum;
    document.getElementById("itemC").innerHTML="";
}

function done(){
    alert(`Successfuly your order and cost ${sum}`);
}


document.getElementById("btn1").addEventListener("click",()=>{
    
    document.getElementById("itemC").innerHTML+=`<li>fruits <span>15$</span></li>`;
});

document.getElementById("btn2").addEventListener("click",()=>{
    
    document.getElementById("itemC").innerHTML+=`<li>fruits <span>15$</span></li>`;
});

document.getElementById("btn3").addEventListener("click",()=>{
    
    document.getElementById("itemC").innerHTML+=`<li>fruits <span>15$</span></li>`;
});

document.getElementById("btn4").addEventListener("click",()=>{
    
    document.getElementById("itemC").innerHTML+=`<li>watermelon juice<span>10$</span></li>`;
});

document.getElementById("btn5").addEventListener("click",()=>{
    
    document.getElementById("itemC").innerHTML+=`<li>Strawberry juice<span>12$</span></li>`;
});

document.getElementById("btn6").addEventListener("click",()=>{
    
    document.getElementById("itemC").innerHTML+=`<li>pepsi <span>7$</span></li>`;
});



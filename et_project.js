

const ul=document.getElementById("list");


function getformvalue(event)
{
event.preventDefault();
const amount=document.getElementById("exp").value;
const desp=document.getElementById("desp").value;
const cat=document.getElementById("cat").value;

//adding functionality
const li=document.createElement("li");
const dltbtn=document.createElement("button");
const editbtn=document.createElement("button");
li.className="list1";
dltbtn.className="dlt btn-md";
editbtn.className="edt btn-md";
dltbtn.type="button";
editbtn.type="button";
dltbtn.appendChild(document.createTextNode("X"));
editbtn.appendChild(document.createTextNode("edit"));
li.textContent=amount+"-"+"-"+desp+"-"+cat;
li.appendChild(dltbtn);
li.appendChild(editbtn);
ul.appendChild(li);

//adding item to local storage
let userdetails={
    "amount":amount,
    "description":desp,
    "category":cat
}
let user_Details=JSON.stringify(userdetails);
localStorage.setItem(userdetails.amount,user_Details);

dltbtn.onclick=()=>{
    localStorage.removeItem(userdetails.amount);
    ul.removeChild(li);
}
editbtn.onclick=()=>{
    localStorage.removeItem(userdetails.amount);
    const amount1=document.getElementById("exp");
const desp1=document.getElementById("desp");
const cat1=document.getElementById("cat");
amount1.value=userdetails.amount;
desp1.value=userdetails.description;
cat1.value=userdetails.category;
ul.removeChild(li);
}
}
const seconditem=document.querySelector(".list-group-item:nth-child(2)");
seconditem.style.background="green";
const thirditem=document.querySelector(".list-group-item:nth-child(3)");
thirditem.remove();


//queryselector all
let second1=document.querySelectorAll('.list-group-item');
second1[1].style.color="green";

var odd=document.querySelectorAll(".list-group-item:nth-child(odd)");
for(let i=0;i<odd.length;i++)
{
    odd[i].style.background="green";
}
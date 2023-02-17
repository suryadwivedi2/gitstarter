// const seconditem=document.querySelector(".list-group-item:nth-child(2)");
// seconditem.style.background="green";
// const thirditem=document.querySelector(".list-group-item:nth-child(3)");
// thirditem.remove();


// //queryselector all
// let second1=document.querySelectorAll('.list-group-item');
// second1[1].style.color="green";

// var odd=document.querySelectorAll(".list-group-item:nth-child(odd)");
// for(let i=0;i<odd.length;i++)
// {
//     odd[i].style.background="green";
// }
//---------------------------------------------------------------------------------------------------------------------------//
/*parentElement
lastelementchild
lastchild
createchild
firstelementchild
firstchild
nextsibling
nextelementsibling
previoussibling
previouselementsibling
createelement
setAttribute
createtesxtnode
appendchild*/

//Traversing dom
var itemlist=document.querySelector('#items');
//console.log(itemlist.parentElement);
itemlist.parentElement.style.backgroundColor='grey';
itemlist.lastElementChild.style.backgroundColor='green';
itemlist.firstElementChild.style.backgroundColor="pink";
//console.log(itemlist.lastChild);
const newspan=document.createElement('span');
newspan.className='new';
newspan.id="yy";
newspan.setAttribute('title',"hello span");
var newspantext=document.createTextNode("hello sharpner!");
newspan.appendChild(newspantext);
//Inserting in dom
const container=document.querySelector("header .container");
var h1=document.querySelector("header h1");
container.insertBefore(newspan,h1);
newspan.style.fontSize="30px";
console.log(itemlist.nextSibling);
console.log(itemlist.nextElementSibling);
console.log(itemlist.previousSibling);
console.log(itemlist.previousElementSibling);


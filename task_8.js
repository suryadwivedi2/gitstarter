//adding items to li
const form = document.getElementById("addForm");
const itemlist = document.getElementById("items");

//form submit event
form.addEventListener("submit", additem);
itemlist.addEventListener("click",removeitem);

function additem(e) {
    e.preventDefault();
    //get input value
    const newitem = document.getElementById("item").value;
    //create new li element
    const li = document.createElement('li');
    li.className = "list-group-item";
    li.appendChild(document.createTextNode(newitem));
    //delete button adding
    const dltbtn=document.createElement("button");
    dltbtn.className="btn btn-danger btn-sm float-right delete";
    dltbtn.appendChild(document.createTextNode("X"));
    li.appendChild(dltbtn);
    itemlist.appendChild(li);
};

function removeitem(e){
if(e.target.classList.contains("delete"))
{
    if(confirm("are you sure?")){
        const lii=e.target.parentElement;
        itemlist.removeChild(lii);
    }
}
}

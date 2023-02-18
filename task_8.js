//adding items to li
const form = document.getElementById("addForm");
const itemlist = document.getElementById("items");
const filter = document.getElementById("filter");
//form submit event
form.addEventListener("submit", additem);
itemlist.addEventListener("click", removeitem);
filter.addEventListener("keyup", filteritem);

function additem(e) {
    e.preventDefault();
    //get input value
    const newitem = document.getElementById("item").value;
    const newitem2 = document.getElementById("item2").value;
    //create new li element
    const li = document.createElement('li');
    li.className = "list-group-item";
    li.appendChild(document.createTextNode(newitem));
    li.appendChild(document.createTextNode(" " + newitem2));
    //delete button adding
    const dltbtn = document.createElement("button");
    dltbtn.className = "btn btn-danger btn-sm float-right delete";
    dltbtn.appendChild(document.createTextNode("X"));
    li.appendChild(dltbtn);
    const editbtn = document.createElement("button");
    editbtn.className = "btn btn-outline-info btn-sm float-right edit";
    editbtn.appendChild(document.createTextNode("Edit"));
    li.appendChild(editbtn);
    itemlist.appendChild(li);
};

function removeitem(e) {
    if (e.target.classList.contains("delete")) {
        if (confirm("are you sure?")) {
            const lii = e.target.parentElement;
            itemlist.removeChild(lii);
        }
    }
}

function filteritem(e) {
    const text = e.target.value.toLowerCase();
    var items = itemlist.getElementsByTagName("li");
    Array.from(items).forEach(function (item) {
        var itemname = item.firstChild.textContent;
        var itemname2 = item.childNodes[1].textContent;
        if (itemname.toLowerCase().indexOf(text) != -1 || itemname2.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = "none";
        }
    });
}
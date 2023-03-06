//selecting items
const ul1 = document.getElementById("ful");
const ul2 = document.getElementById("eul");
const ul3 = document.getElementById("sul");
const dltbtn = document.createElement("input");
dltbtn.class = "btn-check";
dltbtn.type = "button";
dltbtn.value = "Delete";
const li1 = document.createElement("li");
li1.id = "iful";
const li2 = document.createElement("li");
li2.id = "ieul";
const li3 = document.createElement("li");
li3.id = "isul";

//ADDING ITEMS

function getformvalue(event) {
    event.preventDefault();
    const sp = document.getElementById("price").value;
    const name = document.getElementById("name").value;
    const category = document.getElementById("cat").value;
    let shoppingdetails = {
        "sellingprice": sp,
        "name": name,
        "category": category
    }

    axios.post("https://crudcrud.com/api/5bf72407ddcc4469857a40a0a35c784d/shoppingdata", shoppingdetails)
        .then((resolve) => {
            console.log("success");
        }).catch((err) => {
            console.log("error");
        })


    if (category == "food") {
        li1.textContent = sp + "  " + name + "  " + category;
        li1.appendChild(dltbtn)
        ul1.appendChild(li1)
        dltbtn.onclick = () => {
            axios.delete(`https://crudcrud.com/api/5bf72407ddcc4469857a40a0a35c784d/shoppingdata/${data._id}`)
                .then((resolve) => {
                    console.log("deleted");
                }).catch((err) => {
                    console.log("error");
                })
            ul1.removeChild(li1);
        }
    } else if (category == "electronics") {
        li2.textContent = sp + "-" + name + "-" + category;
        li2.appendChild(dltbtn)
        ul2.appendChild(li2);
        dltbtn.onclick = () => {
            axios.delete(`https://crudcrud.com/api/5bf72407ddcc4469857a40a0a35c784d/shoppingdata/${data._id}`)
                .then((resolve) => {
                    console.log("deleted");
                }).catch((err) => {
                    console.log("error");
                })
            ul2.removeChild(li2);
        }
    } else {
        li3.textContent = sp + "  " + name + "  " + category;
        li3.appendChild(dltbtn)
        ul3.appendChild(li3);
        dltbtn.onclick = () => {
            axios.delete(`https://crudcrud.com/api/5bf72407ddcc4469857a40a0a35c784d/shoppingdata/${data._id}`)
                .then((resolve) => {
                    console.log("deleted");
                }).catch((err) => {
                    console.log("error");
                })
            ul3.removeChild(li3);
        }
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////

axios.get("https://crudcrud.com/api/5bf72407ddcc4469857a40a0a35c784d/shoppingdata", {

}).then((resolve) => {
    //console.log(resolve.data);
    for (let i = 0; i < resolve.data.length; i++) {
        showscreenoutput(resolve.data[i]);
    }
}).catch((error) => {
    console.log("error")
})



function showscreenoutput(data) {
    const ul1 = document.getElementById("ful");
    const ul2 = document.getElementById("eul");
    const ul3 = document.getElementById("sul");
    const dltbtn = document.createElement("input");
    dltbtn.class = "btn-check";
    dltbtn.type = "button";
    dltbtn.value = "Delete";
    const li1 = document.createElement("li");
    li1.id = "iful";
    const li2 = document.createElement("li");
    li2.id = "ieul";
    const li3 = document.createElement("li");
    li3.id = "isul";
    let datacategory = `${data.category}`;

    if (datacategory == "food") {
        li1.textContent = `${data.category}` + "-" + `${data.name}` + "-" + `${data.sellingprice}`;
        li1.appendChild(dltbtn)
        ul1.appendChild(li1);
        dltbtn.onclick = () => {
            axios.delete(`https://crudcrud.com/api/5bf72407ddcc4469857a40a0a35c784d/shoppingdata/${data._id}`)
                .then((resolve) => {
                    console.log("deleted");
                }).catch((err) => {
                    console.log("error");
                })
            ul1.removeChild(li1);
        }
    } else if (datacategory == "electronics") {
        li2.textContent = `${data.category}` + "-" + `${data.name}` + "-" + `${data.sellingprice}`;
        li2.appendChild(dltbtn)
        ul2.appendChild(li2);
        dltbtn.onclick = () => {
            axios.delete(`https://crudcrud.com/api/5bf72407ddcc4469857a40a0a35c784d/shoppingdata/${data._id}`)
                .then((resolve) => {
                    console.log("deleted");
                }).catch((err) => {
                    console.log("error");
                })
            ul2.removeChild(li2);
        }
    } else {
        li3.textContent = `${data.category}` + "-" + `${data.name}` + "-" + `${data.sellingprice}`;
        li3.appendChild(dltbtn);
        ul3.appendChild(li3);
        dltbtn.onclick = () => {
            axios.delete(`https://crudcrud.com/api/5bf72407ddcc4469857a40a0a35c784d/shoppingdata/${data._id}`)
                .then((resolve) => {
                    console.log("deleted");
                }).catch((err) => {
                    console.log("error");
                })
            ul3.removeChild(li3);
        }
    }



}
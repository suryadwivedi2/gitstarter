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

async function getformvalue(event) {
    event.preventDefault();
    const sp = document.getElementById("price").value;
    const name = document.getElementById("name").value;
    const category = document.getElementById("cat").value;
    let shoppingdetails = {
        "sellingprice": sp,
        "name": name,
        "category": category
    }
    try {
        const addata = await axios.post("https://crudcrud.com/api/851ebfcb6bd149cb95a2d5ee488ba911/shoppingdata", shoppingdetails)
        console.log("added")
    } catch (err) {
        console.log("error")
    }

    if (category == "food") {
        li1.textContent = sp + " " + name + " " + category;
        li1.appendChild(dltbtn)
        ul1.appendChild(li1)
        dltbtn.onclick = () => {
            ul1.removeChild(li1);
        }
    } else if (category == "electronics") {
        li2.textContent = sp + "-" + name + "-" + category;
        li2.appendChild(dltbtn)
        ul2.appendChild(li2);
        dltbtn.onclick = () => {
            ul2.removeChild(li2);
        }
    } else {
        li3.textContent = sp + " " + name + " " + category;
        li3.appendChild(dltbtn)
        ul3.appendChild(li3);
        dltbtn.onclick = () => {
            ul3.removeChild(li3);
        }
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////
async function getdata() {
    try {
        const resolve = await axios.get("https://crudcrud.com/api/851ebfcb6bd149cb95a2d5ee488ba911/shoppingdata")
        for (let i = 0; i < resolve.data.length; i++) {
            showscreenoutput(resolve.data[i]);
        }
    } catch (err) {
        console.log("error");
    }

}
getdata();


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
            axios.delete(`https://crudcrud.com/api/851ebfcb6bd149cb95a2d5ee488ba911/shoppingdata/${data._id}`)
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
            axios.delete(`https://crudcrud.com/api/851ebfcb6bd149cb95a2d5ee488ba911/shoppingdata/${data._id}`)
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
            axios.delete(`https://crudcrud.com/api/851ebfcb6bd149cb95a2d5ee488ba911/shoppingdata/${data._id}`)
                .then((resolve) => {
                    console.log("deleted");
                }).catch((err) => {
                    console.log("error");
                })
            ul3.removeChild(li3);
        }
    }
}
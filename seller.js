//selecting items
const ul1 = document.getElementById("ful");
const ul2 = document.getElementById("eul");
const ul3 = document.getElementById("sul");


//ADDING ITEMS

function getformvalue(event) {
    event.preventDefault();
    const sp = document.getElementById("price").value;
    const name = document.getElementById("name").value;
    const category = document.getElementById("cat").value;
    let shoppingdetails = {
        "Sellingprice": sp,
        "Productname": name,
        "Category": category
    }
    axios.post("http://localhost:3000/seller/add-product", shoppingdetails)
        .then((response) => {
            showscreenoutput(shoppingdetails);
            console.log("added")
        }).catch((err) => {
            console.log(err);
        })


}
///////////////////////////////////////////////////////////////////////////////////////////////////////
axios.get("http://localhost:3000/seller/get-product", {

}).then((resolve) => {
    for (let i = 0; i < resolve.data.length; i++) {
        showscreenoutput(resolve.data[i]);
        console.log("all products fetched");
    }
}).catch((err) => {
    console.log("error");
}
)



function showscreenoutput(data) {
    const ul1 = document.getElementById("ful");
    const ul2 = document.getElementById("eul");
    const ul3 = document.getElementById("sul");
    const dltbtn = document.createElement("input");
    dltbtn.class = "btn-check";
    dltbtn.type = "button";
    dltbtn.value = "Delete-product";
    const li1 = document.createElement("li");
    li1.id = "iful";
    const li2 = document.createElement("li");
    li2.id = "ieul";
    const li3 = document.createElement("li");
    li3.id = "isul";
    let datacategory = data.Category;

    if (datacategory == "food") {
        li1.textContent = data.Category + "-" + data.Productname + "-" + data.Sellingprice;;
        li1.appendChild(dltbtn)
        ul1.appendChild(li1);
        dltbtn.onclick = () => {
            axios.delete(`http://localhost:3000/seller/delete-product/${data.id}`)
                .then((resolve) => {
                    console.log("deleted");
                }).catch((err) => {
                    console.log("error");
                })
            ul1.removeChild(li1);
        }
    } else if (datacategory == "electronics") {
        li2.textContent = data.Category + "-" + data.Productname + "-" + data.Sellingprice;;
        li2.appendChild(dltbtn)
        ul2.appendChild(li2);
        dltbtn.onclick = () => {
            axios.delete(`http://localhost:3000/seller/delete-product/${data.id}`)
                .then((resolve) => {
                    console.log("deleted");
                }).catch((err) => {
                    console.log("error");
                })
            ul2.removeChild(li2);
        }
    } else {
        li3.textContent = data.Category + "-" + data.Productname + "-" + data.Sellingprice;
        li3.appendChild(dltbtn);
        ul3.appendChild(li3);
        dltbtn.onclick = () => {
            axios.delete(`http://localhost:3000/seller/delete-product/${data.id}`)
                .then((resolve) => {
                    console.log("deleted");
                }).catch((err) => {
                    console.log("error");
                })
            ul3.removeChild(li3);
        }
    }
}
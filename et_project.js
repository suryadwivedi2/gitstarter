let s = true;
let user_id = 0;

const ul = document.getElementById("list");


function getformvalue(event) {
    event.preventDefault();
    const amount = document.getElementById("exp").value;
    const desp = document.getElementById("desp").value;
    const cat = document.getElementById("cat").value;

    let userdetails = {
        "amount": amount,
        "description": desp,
        "category": cat
    }
    if (s == true) {
        axios.post('http://localhost:3000/expense/add-expense', userdetails)
        .then((response) => {
                showonscreen(userdetails);
                console.log('success');
            }).catch(err => console.log(err))
    } else if (s == false) {
        axios.put(`http://localhost:3000/expense/edit-expense/${user_id}`, userdetails)
            .then((response) => {
                showonscreen(userdetails);
                console.log('success');
            }).catch(err => console.log(err));
    }
}


axios.get("http://localhost:3000/expense/get-expense", {

})
    .then((res) => {
        for (let i = 0; i < res.data.length; i++) {
            showonscreen(res.data[i]);
        }
    }).catch((err) => {
        console.log(err);
    })


function showonscreen(data) {
    //adding functionality
    const li = document.createElement("li");
    const dltbtn = document.createElement("button");
    const editbtn = document.createElement("button");
    li.className = "list1";
    dltbtn.className = "dlt btn-md";
    editbtn.className = "edt btn-md";
    dltbtn.type = "button";
    editbtn.type = "button";
    dltbtn.appendChild(document.createTextNode("X"));
    editbtn.appendChild(document.createTextNode("edit"));
    li.textContent = JSON.stringify(data.amount) + "-" + JSON.stringify(data.description) + "-" + JSON.stringify(data.category);
    li.appendChild(dltbtn);
    li.appendChild(editbtn);
    ul.appendChild(li);

    dltbtn.onclick = () => {
        axios.delete(`http://localhost:3000/expense/delete-expense/${data.id}`)
            .then((res) => {
                console.log('deleted');
            }).catch((err) => console.log(err));
        ul.removeChild(li);
    }
    editbtn.onclick = () => {
        const amount1 = document.getElementById("exp");
        const desp1 = document.getElementById("desp");
        const cat1 = document.getElementById("cat");
        amount1.value = `${data.amount}`;
        desp1.value = `${data.description}`;
        cat1.value = `${data.category}`;
        s = false;
        user_id = `${data.id}`;
        ul.removeChild(li);
    }
}
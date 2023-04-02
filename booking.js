let s = true;
let user_id=0;

// adding events
function getformvalue(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phonenumber =document.getElementById('phone').value;
    let userdetails = {
       "username":name,
         "email":email,
        "phonenumber":phonenumber
    }
    if (s == true) {
        axios.post('http://localhost:3000/user/add-user',userdetails)
            .then((response) => {
                console.log("success");
            }).catch((reject) => {
                console.log("error");
            })
    } else if (s == false) {
        axios.put(`https://crudcrud.com/api/c951a84f4ab74ec0bcbba993d75efc3e/bookingdata/${user_id}`, userdetails)
            .then((res) => {
                console.log("success");
            }).catch((err) => {
                console.log(err);
            })
    }
}
axios.get("http://localhost:3000/user/get-user", {

})
    .then((res) => {
        for (let i = 0; i < res.data.length; i++) {
            showouputonscreen(res.data[i]);
        }
    }).catch((err) => {
        console.log(err);
    })


function showouputonscreen(data) {
    const ul = document.getElementById("text22");
    const li = document.createElement("li");
    li.id = "li1";
    li.class = "lic";
    li.textContent = JSON.stringify(data);
    const dltbtn = document.createElement("input");
    const editbtn = document.createElement("input");
    dltbtn.type = "button";
    dltbtn.id = "dltbtn";
    dltbtn.class = "btn-danger";
    dltbtn.value = "X";
    editbtn.type = "button";
    editbtn.id = "editbtn";
    editbtn.class = "editbtn1";
    editbtn.value = "edit";
    li.appendChild(dltbtn);
    li.appendChild(editbtn);
    ul.appendChild(li);
    dltbtn.onclick = () => {
        ul.removeChild(li);
        axios.delete(`http://localhost:3000/user/delete-user/${data.id}`)
            .then((resolve) => {
            }).catch((error) => {
                console.log(error);
            })
    }
    editbtn.onclick = () => {
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const phone = document.getElementById("phone");
        name.value = `${data.name}`;
        email.value = `${data.email}`;
        phone.value = `${data.Phonenumber}`;
        ul.removeChild(li);
        s=false;
        user_id=`${data._id}`;
        console.log(user_id);
    }
}
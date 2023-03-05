let s = true;
let user_id=0;

//     // adding events
function getformvalue(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("phone").value;
    let userdetails = {
        "name": name,
        "email": email,
        "Phonenumber": number
    }
    if (s == true) {
        axios.post("https://crudcrud.com/api/3fc0cd66e4ed4088a35be50848129f88/bookingdata", userdetails)
            .then((resolve) => {
                console.log("success");
            }).catch((reject) => {
                console.log("error");
            })
    } else if (s == false) {
        axios.put(`https://crudcrud.com/api/3fc0cd66e4ed4088a35be50848129f88/bookingdata/${user_id}`, userdetails)
            .then((res) => {
                console.log("success");
            }).catch((err) => {
                console.log(err);
            })
    }
}
axios.get("https://crudcrud.com/api/3fc0cd66e4ed4088a35be50848129f88/bookingdata", {

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
        axios.delete(`https://crudcrud.com/api/3fc0cd66e4ed4088a35be50848129f88/bookingdata/${data._id}`)
            .then((resolve) => {
                ul.removeChild(li);
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
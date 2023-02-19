// //selecting form 
const ul = document.getElementById("text1");
//     // adding events
//     form.addEventListener("onclick", addbtn);

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
    let user_details = [];
    user_details.push(JSON.stringify(userdetails));
    if (localStorage.getItem("userdetails") == null) {
        localStorage.setItem("userdetails", user_details);
    } else {
        let old_data = JSON.parse(localStorage.getItem("userdetails"));
        user_details.push(JSON.stringify(old_data));
        localStorage.setItem("userdetails", user_details);
    }
    const li = document.createElement("li");
    li.className = "list-group";
    li.textContent = localStorage.getItem("userdetails");
    const dltbtn=document.createElement("button");
    dltbtn.value="delete";
    li.appendChild(dltbtn);
    ul.appendChild(li);

}



// //functions

// function addbtn(e) {
//     e.preventDefault();
//     const dltbtn = document.createElement("button");
//     dltbtn.className = "btn";
//     dltbtn.value = "DELETE";

// }
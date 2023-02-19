// //selecting form 
const ul = document.getElementById("text1");
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
    let user_Details = JSON.stringify(userdetails);
    localStorage.setItem(userdetails.email, user_Details)
    const li = document.createElement("li");
    li.className = "list-group";
    li.textContent = userdetails.name + "  " + userdetails.email + "  " + userdetails.Phonenumber;
    ul.appendChild(li);
    const dltbtn = document.createElement("input");
    dltbtn.type = "button";
    dltbtn.value = "delete";
    li.appendChild(dltbtn);
    const editbtn = document.createElement("input");
    editbtn.type = "button";
    editbtn.value = "editbtn";
    li.appendChild(editbtn);
    dltbtn.onclick = () => {
        localStorage.removeItem(userdetails.email);
        ul.removeChild(li);
    }
    editbtn.onclick = () => {
        localStorage.removeItem(userdetails.email);
        let name1 = document.getElementById("name");
        let email1 = document.getElementById("email");
        let number1 = document.getElementById("phone")
        name1.value = userdetails.name;
        email1.value = userdetails.email;
        number1.value = userdetails.Phonenumber;
        ul.removeChild(li);
    }
}


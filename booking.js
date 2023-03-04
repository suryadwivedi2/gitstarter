

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

    axios.post("https://crudcrud.com/api/3fc0cd66e4ed4088a35be50848129f88/bookingdata", userdetails)
        .then((resolve) => {
            console.log("success");
        }).catch((reject) => {
            console.log("error");
        })
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
    const dltbtn=document.createElement("input");
    dltbtn.type="button";
       dltbtn.id="dltbtn";
    dltbtn.class="btn-danger";
    dltbtn.value="X";
    li.appendChild(dltbtn);   
    ul.appendChild(li);
   dltbtn.onclick=()=>{
   axios.delete("https://crudcrud.com/api/3fc0cd66e4ed4088a35be50848129f88/bookingdata/64039612a997a303e87757df")
   .then((resolve)=>{
       ul.removeChild(li);
   }).catch((error)=>{
       console.log(error);
   })
   }
}
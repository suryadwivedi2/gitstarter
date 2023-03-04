const ul = document.getElementById("text1");
const text=document.getElementById("text22");

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

    axios.post("https://crudcrud.com/api/754749018ce04b7c9a62857d815d30fa/bookingdata",userdetails)
    .then((resolve)=>{
        console.log("success");
    }).catch((reject)=>{
        console.log("error");
    })
    }

    axios.get("https://crudcrud.com/api/754749018ce04b7c9a62857d815d30fa/bookingdata",{
    
})
    .then((res)=>{
        showouputonscreen(res.data)
    }).catch((err)=>{
        console.log(err);
    })


function showouputonscreen(data){
text.innerHTML=JSON.stringify(data);
}
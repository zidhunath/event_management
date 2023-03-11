let  form = document.getElementById("loginForm");
let  logInButton = document.getElementById("login_Btn");
let  nameInput = document.getElementById("name");

let  loginUrl = `https://reqres.in/api/login`


let userAuthToken = localStorage.getItem("userAuthToken")|| null

form.addEventListener("submit", (event)=>{
    event.preventDefault()
    // let adminEmail = "eve.holt@reqres.in";
    // let adminPassword ="cityslicka"
    let  emailInput = document.getElementById("email").value;
    let  passwordInput = document.getElementById("password").value;
    console.log(emailInput)
        console.log(passwordInput)
    fetch(loginUrl,{    
        method: 'POST',
        headers:{
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            email:emailInput,
            password:passwordInput
        })
    })
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        let success = document.getElementById("header")
        success.innerText= "Login Sucess";
        window.location.href= "./data.html"
        
    })
    .catch((error)=>{
        console.log("error")
    })

    
    
})


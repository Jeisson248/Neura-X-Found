const btnSignIn = document.getElementById("sing-in"),
      btnSignUp = document.getElementById("sing-up"),
      formRegister= document.querySelector(".register"),
      fromLogin= document.querySelector(".login");


      btnSignIn.addEventListener("click", e =>{
       formRegister.classList.add("hide");
       fromLogin.classList.remove("hide")
})    
      btnSignUp.addEventListener("click", e =>{
            fromLogin.classList.add("hide");
            formRegister.classList.remove("hide")
})
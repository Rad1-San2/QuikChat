const form = document.querySelector(".signup form"),
continueBtn = form.querySelector(".button input");
errorText = form.querySelector(".error-text");

form.onsubmit = (e)=>{
    e.preventDefault();  
}

continueBtn.onclick = ()=>{
    let xhr = new XMLHttpRequest();   //XML object
    xhr.open("POST", "php/signup.php", true);
    xhr.onload = ()=>{
      if(xhr.readyState === XMLHttpRequest.DONE){
          if(xhr.status === 200){
              let data = xhr.response;    //respond passed url
              console.log(data);
              if(data === "success"){
                location.href="users.php";
              }else{
                errorText.textContent = data;
                errorText.style.display = "block";
              }
          }
      }
    }
    let formData = new FormData(form);  //object for sending form data through ajax to php
    xhr.send(formData);
}
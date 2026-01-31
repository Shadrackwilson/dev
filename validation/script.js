const form = document.getElementById('form');

form.addEventListener('submit', function (e){
   e.preventDefault();

   const name = document.getElementById('name').value.trim();
   const password = document.getElementById('password').value.trim();
   const regno = /^\d{2}\.\d{4}\.\d{2}\.\d{2}\.\d{4}$/;

   if (name === "" || password === ""){
    alert("username & password must be filled");
    return;
   }
   if(password.length >= 8){
    alert("password character must be more than 8");
   }
   if(!regno.test(name)){
    alert("username is not correct");
   }
   alert('welcome'+''+ name);

});
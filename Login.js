let NewsLetter='\
<form action="https://sheetdb.io/api/v1/e2sb8ez0t1kva" id="sheetdb-form" Method="Post" >\
    <h1>E-corp Company Group</h1>\
    <br>\
    <h1>News Letter SignUp</h1>\
    <br>\
    <label>UserName</label>\
    <br>\
    <input type="text" name="UserName" placeholder="Enter Your UserName" id="UserName" maxlength="16" required>\
    <br><br>\
    <label>Email</label>\
    <br>\
    <input type="email" name="Email" placeholder="Enter Your Email" id="Email"  required>\
    <br><br>\
    <button onclick="Login()">Submit</button>\
</form>\
';
Login=()=>{
    let UserName=document.querySelector('#UserName').value;
    let Email=document.querySelector('#Email').value;
    var form = document.getElementById('sheetdb-form');
    form.addEventListener("submit", e => {
      e.preventDefault();
      fetch(form.action, {
          method : "POST",
          body: new FormData(document.getElementById("sheetdb-form")),
      }).then(
          response => response.json()
      ).then((html) => {
       if (UserName.length>=1&&Email.length>=1) {
        localStorage.setItem("MovieLanderUsername",UserName);
        localStorage.setItem("MovieLanderEmail",Email);
        LoginDisplay.style.display = 'none';
        
    }else {
        LoginDisplay.style.display = 'block';
    }
      });
    });
    
}
AutoLogIn=()=>{
    let StoredUsername=localStorage.getItem("MovieLanderUsername",UserName);
    let StoredEmail=localStorage.getItem("MovieLanderEmail",Email);
    if (StoredUsername&&StoredEmail) {
        LoginDisplay.style.display = 'none';
    } else {
        LoginDisplay.style.display = 'block';
    }
}
    
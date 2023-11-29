LOGINPAGE=()=>{

    DIV.innerHTML=`

        <h1 class='AppName' >Movie Lander</h1>

        <h1 class='Message' id='LoginMessage' ></h1>

        <input type="email"  placeholder="Enter Email " class='LoginEmail' >

        <input type="password" placeholder="Enter Password " class='LoginPassword' >

        <h1 onclick='FORGOTPASSWORD()' class='ForgotPassword' >Forgot Password</h1>

        <h1 onclick='TERMSANDCONDITIONSPAGE()' class='Terms' >Terms And Conditions</h1>

        <button class='LoginButton' onclick='LOGINUSER()'>Login</button>

        <button onclick='CREATEACCOUNTPAGE()'>Create Account</button>
    
    `;

}

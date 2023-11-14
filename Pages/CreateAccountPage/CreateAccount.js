CREATEACCOUNTPAGE=()=>{

    DIV.innerHTML=`

        <h1 class='AppName' >Movie Lander</h1>

        <h1 class='Message' ></h1>

        <input type="text"  placeholder="Enter UserName " >

        <input type="email"  placeholder="Enter Email " >

        <input type="password" placeholder="Enter Password " >

        <input type="text" placeholder="Date Of Birth " >

        <input type="tel" placeholder="Enter Phone Number " >

        <input type="tel" placeholder="Enter Country " >

        <h1 onclick='TERMS()' class='Terms' >Terms And Conditions</h1>

        <button onclick='CREATEUSER()'>Create Account</button>

        <button onclick='LOGINPAGE()' >Login</button>
    
    `;
}
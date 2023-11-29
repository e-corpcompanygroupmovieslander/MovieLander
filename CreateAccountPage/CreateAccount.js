CREATEACCOUNTPAGE=()=>{

    DIV.innerHTML=`

        

        <h1 class='AppName' >Movie Lander</h1>
        
        <h1 class='Message' ></h1>

        <input type="text" class='username'  placeholder="Enter UserName " >

        <input type="email"  class='useremail'  placeholder="Enter Email " >

        <input type="password" class='password'   placeholder="Enter Password " >

        <input type="text" class='userdate'  placeholder="Date Of Birth " >

        <input type="tel" class='userphonenumber'  placeholder="Enter Phone Number " >

        <input type="text" class='userCountry'  placeholder="Enter Country " >

        <button class='CreateAccountButton'  onclick='CREATEUSER()'>Create Account</button>

        <button onclick='LOGINPAGE()' >Login</button>

        <div class='MessageDiv'></div>
    
    `;

    const UserDate=document.querySelector('.userdate');

    UserDate.addEventListener('input',()=>{

        UserDate.type='date';

    })

    const Telephone=document.querySelector('.userphonenumber');

    const MessageDiv=document.querySelector('.MessageDiv');

    Telephone.addEventListener('click',()=>{

        MessageDiv.style.display='inline-flex';

        MessageDiv.style.height='10%';

        MessageDiv.innerHTML=`
        
        <h1 class='CountryCode'>Start With Country Code</h1>

        `;

        setTimeout(() => {
            
            MessageDiv.style.height='0%';

            MessageDiv.style.display='none';

        }, 2000);



    })
    

}


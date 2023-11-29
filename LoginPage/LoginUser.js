LOGINUSER=()=>{

    const Message=document.querySelector('#LoginMessage');

    const EmailInput=document.querySelector('.LoginEmail');

    const Password=document.querySelector('.LoginPassword');

    const LoginButton=document.querySelector('.LoginButton');

    if (EmailInput.value && Password.value) {

        LoginButton.innerHTML=  `
        
        <img class='LoadingIcon' src='./Images/Icons/loading.png'/>

        ` ;

        fetch(LOGINURL)

        .then(res => res.json())

        .then(data =>{

            const user=data.find(user => user.Email===EmailInput.value &&  user.Password === Password.value );

            if (user) {

                if (user.Premium) {

                    localStorage.setItem('Premium','TRUE');
                    
                } else {
                    
                    localStorage.removeItem('Premium');

                }
                
                localStorage.setItem('UserEmail',user.Email)

                localStorage.setItem('LoggedIn',new Date)

                HOMEPAGE();

                APPTIME();

            } else {
                
                Message.innerHTML=`User Doesnot Exist`;

                setTimeout(() => {
        
                    Message.innerHTML=``;  

                    LoginButton.innerHTML= `Login`;
                    
                }, 2000); 

            }

        })

        .catch(error=>{

            console.log(error)

            Message.innerHTML=`Something Went Wrong,Try Again Later`;

                setTimeout(() => {
        
                    Message.innerHTML=``;  

                    LoginButton.innerHTML= `Login`;
                    
                }, 2000); 

        })
  
    } else {
        
        Message.innerHTML=`Fill All Parts`;

        setTimeout(() => {

            Message.innerHTML=``;  
            
        }, 2000);

    }

    localStorage.setItem('NewVersion',NewVersion);

    localStorage.setItem('AppVersion',APPVERSION);
    
}


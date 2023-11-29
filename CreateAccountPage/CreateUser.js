function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
    return result;
}

CREATEUSER=()=>{

    const UserName=document.querySelector('.username');
    const UserEmail=document.querySelector('.useremail');
    const UserPassword=document.querySelector('.password');
    const UserDate=document.querySelector('.userdate');
    const UserTelephone=document.querySelector('.userphonenumber');
    const UserCountry=document.querySelector('.userCountry');
    const Message=document.querySelector('.Message');
    const CreateAccountButton=document.querySelector('.CreateAccountButton');

    const USERDATA=UserName.value && UserEmail.value && UserPassword.value && UserDate.value && UserTelephone.value && UserCountry.value;

    if (USERDATA) {
        
        CreateAccountButton.innerHTML= `

            <img class='LoadingIcon' src='./Images/Icons/loading.png'/>
        
        `;

        fetch(LOGINURL)

        .then(res => res.json())

        .then(data =>{

            const user=data.find(user => user.Email===UserEmail.value );

            if (user) {
                
                Message.innerHTML=`User Email Taken`;

                setTimeout(() => {
        
                    Message.innerHTML=``;  

                    CreateAccountButton.innerHTML= `Create Account`;
                    
                }, 2000); 
                

            } else {

                const firstLetter = UserEmail.value.charAt(0).toUpperCase();
                const birthYear = UserDate.value.slice(-4); // Extract last 4 characters for the year
                
                // Calculate the length of the random string to make the total length 11
                const randomStringLength = 11 - 1 - 4; // 1 character for the first letter of email, 4 characters for the birth year
                
                // Generate the random string with the calculated length
                const randomString = generateRandomString(randomStringLength);
        
                // Ensure the total length of the secret code is 11
                const secretCode = `${firstLetter}${birthYear}${randomString}`.slice(0, 11);
        
                const Users={
                    "UserName":UserName.value,
                    "Email":UserEmail.value,
                    "Password":UserPassword.value,
                    "Password2":UserPassword.value,
                    "Date":UserDate.value,
                    "Telephone":UserTelephone.value,
                    "Location":UserCountry.value,
                    "CreatedOn":new Date(),
                    "SecretCode":secretCode,
                    "Premium":"TRUE",
                    "AppVersion":APPVERSION,
                    "Device": {
                        "Browser": {
                            "Name": getBrowserName(),
                            "Version": getBrowserVersion()
                        },
                        "OS": {
                            "Name": getOSName(),
                            "Version": getOSVersion()
                        },
                        "ScreenWidth": screen.width,
                        "ScreenHeight": screen.height
                    }
                };

                     // Function to get browser name
                     function getBrowserName() {

                        return navigator.appName;
    
                    }
                    
                    // Function to get browser version
                    function getBrowserVersion() {
    
                        return navigator.appVersion;
    
                    }
                    
                    // Function to get OS name
                    function getOSName() {
    
                        return navigator.platform;
    
                    }
                    
                    // Function to get OS version
                    function getOSVersion() {
    
                        return navigator.userAgent;
                        
                    }

                fetch(CreateAccountlink,{
                    method:"POST",
                    mode:MODE,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body:JSON.stringify(Users)
                })

                .then(data =>{

                    fetch(LOGINURL)

                    .then(res => res.json())
            
                    .then(data =>{


                        const user=data.find(user => user.Email===UserEmail.value);

                        if (user) {

                            localStorage.setItem('NewVersion',NewVersion);
    
                            localStorage.setItem('AppVersion',APPVERSION);
    
                            localStorage.setItem('UserEmail',UserEmail.value);

                            localStorage.setItem('Premium','TRUE');
    
                            CREATEPRIVACYPOLICYPAGE();
                            
                        } else {
                           
                            Message.innerHTML=`Something Went Wrong,Try Again Later`;
            
                            setTimeout(() => {
                    
                                Message.innerHTML=``;  
            
                                CreateAccountButton.innerHTML= `Create Account`;
                                
                            }, 2000); 
                            
                        }

                        

                    })
                    

                })

                .catch(error=>{

                    console.log(error)
        
                    Message.innerHTML=`Something Went Wrong,Try Again Later`;
        
                        setTimeout(() => {
                
                            Message.innerHTML=``;  
        
                            CreateAccountButton.innerHTML= `Create Account`;
                            
                        }, 2000); 
        
                })
                
                
                

            }

        })

        .catch(error=>{

            console.log(error)

            Message.innerHTML=`Something Went Wrong,Try Again Later`;

                setTimeout(() => {
        
                    Message.innerHTML=``;  

                    CreateAccountButton.innerHTML= `Create Account`;
                    
                }, 2000); 

        })
        


    } else {
        
        Message.innerHTML=`Fill All Parts`;

        setTimeout(() => {

            Message.innerHTML=``;  
            
        }, 2000);

    }


}
GETUSERDETAILS=()=>{

    const UserDetails=document.querySelector('.UserDetails');

    UserDetails.innerHTML=`

    <img class='LoadingIcon' id='BigLoading' src='../Images/Icons/loading.png'/>
    
    `;

    const USEREMAIL=localStorage.getItem('UserEmail');

    fetch(LOGINURL)

        .then(res => res.json())

        .then(data =>{

            UserDetails.innerHTML=``;

            const user=data.find(user => user.Email===USEREMAIL);

            if (user) {
                
                UserDetails.innerHTML=`
                
                <div class='UserDataDiv'>

                    <h1 class='UserNameHolder'>${user.UserName}</h1>

                    <img class='UserIcons' src='/Images/Icons/user.png'/>

                </div>

                <div class='UserDataDiv'>

                    <h1 class='UserNameHolder'>${user.Email}</h1>

                    <img class='UserIcons' src='/Images/Icons/gmail.png'/>

                </div>

                <div class='UserDataDiv'>

                    <h1 class='UserNameHolder'>0${user.Telephone}</h1>

                    <img class='UserIcons' src='/Images/Icons/phone.png'/>

                </div>

                <div class='UserDataDiv'>

                    <h1 class='UserNameHolder'>${user.SecretCode}</h1>

                    <img class='UserIcons' src='/Images/Icons/secretcode.png'/>

                </div>

                <div class='UserDataDiv'>

                    <h1 class='UserNameHolder'>${user.Location}</h1>

                    <img class='UserIcons' src='/Images/Icons/location.png'/>

                </div>

                <div class='MiniSettings'>

                    <div class='SavedMovies' onclick='VIEWSAVEDMOVIES()'>

                        <h1 class='UserNameHolder'>Saved</h1>

                        <img class='UserIcons' src='/Images/Icons/saved.png'/>
                    
                    </div>

                    <div class='SavedMovies' onclick='MOREAPPS()'>

                        <h1 class='UserNameHolder'>MoreApps</h1>

                        <img class='UserIcons' src='/Images/Icons/app.png'/>
                    
                    </div>
                
                </div>

                
                `;  

                

            } else {
                
                LOGINPAGE(); 

            }

        })

        .catch(error=>{

            console.log(error)

        })
    

}
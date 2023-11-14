AUTOLOGIN=()=>{

    if (localStorage.getItem('UserEmail')) {
        
        HOMEPAGE();

    } else {
       
        LOGINPAGE();
        
    }

}
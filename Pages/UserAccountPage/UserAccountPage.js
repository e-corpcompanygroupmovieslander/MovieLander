USERACCOUNTPAGE=()=>{

    if (navigator.onLine) {
          
        DIV.innerHTML=`

        <img onclick='HOMEPAGE()' class='BackIcon' src='./Images/Icons/back.png'/>

        <img onclick='PREMIUMPAYAMENT()'  class='PremiumIcon' src='./Images/Icons/lock.png'/>

        <img  onclick='SETTINGSPAGE()' class='SettingsIcon' src='./Images/Icons/setting.png'/>

        <div class='UserDetails'></div>


        `;

        GETUSERDETAILS();

    } else {
        
        DIV.innerHTML=`

        <img onclick='HOMEPAGE()' class='BackIcon' src='./Images/Icons/back.png'/>
    
      
        <img class='LoadingIcon' id='BigLoading' src='./Images/Icons/loading.png'/>
    
    
        `;
        
    }

    
}
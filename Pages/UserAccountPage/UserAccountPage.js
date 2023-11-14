USERACCOUNTPAGE=()=>{

    DIV.innerHTML=`

    <img onclick='HOMEPAGE()' class='BackIcon' src='../Images/Icons/back.png'/>

    <img onclick='PREMIUMPAYAMENT()'  class='PremiumIcon' src='../Images/Icons/lock.png'/>

    <img  onclick='SETTINGSPAGE()' class='SettingsIcon' src='../Images/Icons/setting.png'/>

    <div class='UserDetails'></div>


    `;

    GETUSERDETAILS();
    
}
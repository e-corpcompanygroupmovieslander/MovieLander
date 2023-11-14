SETTINGSPAGE=()=>{

    DIV.innerHTML=`

    <img onclick='USERACCOUNTPAGE()' class='BackIcon' src='../Images/Icons/back.png'/>
    
    <h1  class='RecommendedSeeMore'> App Settings</h1>

    <div class='UserDetails' >

        <div class='UserDataDiv' onclick='PARENTALCONTROLPAGE()'>

            <h1 class='UserNameHolder'>Parental Control</h1>

            <img class='UserIcons' src='/Images/Icons/parentalcontrol.png'/>

        </div>

        <div class='UserDataDiv' onclick='PRIVACYPOLICYPAGE()'>

            <h1 class='UserNameHolder'>Privacy Policy</h1>

            <img class='UserIcons' src='/Images/Icons/privacypolicy.png'/>

        </div>

        <div class='UserDataDiv' onclick='HELPPAGE()'>

            <h1 class='UserNameHolder'>Help</h1>

            <img class='UserIcons' src='/Images/Icons/help.png'/>

        </div>

        <div class='UserDataDiv' onclick='APPUPDATEPAGE()'>

            <h1 class='UserNameHolder'>App Update</h1>

            <img class='UserIcons' src='/Images/Icons/app.png'/>

        </div>

        <div class='UserDataDiv' onclick='CONTACTUS()'>

            <h1 class='UserNameHolder'>Contact Us</h1>

            <img class='UserIcons' src='/Images/Icons/phone.png'/>

        </div>

        <div class='MiniSettings' onclick='MODES()' >

            <div class='SavedMovies'>

                <h1 id='ModeId' class='UserNameHolder'></h1>

                <img id='ModeImageId' class='UserIcons' src=''/>
            
            </div>

            <div class='SavedMovies' onclick='LOGOUTPAGE()'>

                <h1 class='UserNameHolder'>LogOut</h1>

                <img class='UserIcons' src='/Images/Icons/logout.png'/>
            
            </div>

        </div>
    
    </div>

    `;

    const ModeId=document.querySelector('#ModeId');

    const ModeImageId=document.querySelector('#ModeImageId');

    if (localStorage.getItem('Mode')==='light' || !localStorage.getItem('Mode')) {
        
        ModeId.innerHTML='Dark';

        ModeImageId.src='../../Images/Icons/moon.png';

    } else {
        
        ModeId.innerHTML='Light';

        ModeImageId.src='../../Images/Icons/sun.png';

    }

 



}
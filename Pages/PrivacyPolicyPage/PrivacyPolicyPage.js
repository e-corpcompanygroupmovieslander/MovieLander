PRIVACYPOLICYPAGE=()=>{

    DIV.innerHTML=`

    <img onclick='SETTINGSPAGE()' class='BackIcon' src='../Images/Icons/back.png'/>
    
    <h1  class='RecommendedSeeMore'> App Privacy Policy</h1>

    <div class='UserDetails' id='HelpDiv' ></div>

    
    `;

    const HELPDIV=document.querySelector('#HelpDiv');
    HELPDIV.style.overFlowY='auto';
    HELPDIV.style.overFlowX='hidden';
    HELPDIV.style.padding='1rem';

    fetch(PRIVACYTEXT)

    .then(res=>res.text())

    .then(data=>{

        HELPDIV.innerHTML=data;

    })

    .catch(error=>console.log(error))
}
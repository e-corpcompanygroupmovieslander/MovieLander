PARENTALCONTROLPAGE=()=>{

    DIV.innerHTML=`
    
    <img onclick='SETTINGSPAGE()' class='BackIcon' src='../Images/Icons/back.png'/>
    
    <h1  class='RecommendedSeeMore'>Parental Control</h1>

    <div class='UserDetails' id='HelpDiv'>

        <div class='ParentalControlDiv'></div>

        <input class='ParentalControlInput' type="number" minlength="5" maxlength="10"   placeholder="Enter ParentalControl Pin">

        <button class='ParentalControlButton' '>Activate Parental  Control</button>

    </div>
    
    `;

    const ParentalControlDiv=document.querySelector('.ParentalControlDiv');

     //set ParentalControl

    const ParentalControlButton=document.querySelector('.ParentalControlButton');

    const ParentalControlInput=document.querySelector('.ParentalControlInput');

    fetch(PARENTALCONTROLTEXT)

    .then(res=>res.text())

    .then(data =>{

        ParentalControlDiv.innerHTML=data;

    })

    .catch(error=>console.log(error))


    ParentalControlButton.addEventListener('click',()=>{

        if (ParentalControlInput.value.length>=5) {

            const STOREDPIN=localStorage.getItem('ParentalControlPin');

            const SETPIN=ParentalControlInput.value;

            if (STOREDPIN===SETPIN) {
                
                localStorage.removeItem('ParentalControlPin');

                ParentalControlButton.innerHTML='Parental Control Off';

                setTimeout(() => {
    
                    ParentalControlInput.value='';

                    ParentalControlButton.innerHTML='Activate Parental Control'; 
                    
                }, 2000);

            } else {
                
                ParentalControlButton.innerHTML='Enter Correct Pin';

                setTimeout(() => {
                    
                    ParentalControlInput.value='';

                    if (localStorage.getItem('ParentalControlPin')) {
                     
                        ParentalControlButton.innerHTML='Deactivate Parental Control'; 
                        
                    } else {
                        
                        ParentalControlButton.innerHTML='Activate Parental Control'; 
    
                    }
                    
                }, 2000);

            }

            if(!STOREDPIN){

                localStorage.setItem('ParentalControlPin',SETPIN);

                ParentalControlButton.innerHTML='Parental Control On';

                setTimeout(() => {
    
                    ParentalControlInput.value='';

                    ParentalControlButton.innerHTML='Deactivate Parental Control'; 
                    
                }, 2000);

            }
                  
        } else {
            
            ParentalControlButton.innerHTML='Enter Atleast 5 digit Pin';

            setTimeout(() => {

                ParentalControlInput.value='';
                
                if (localStorage.getItem('ParentalControlPin')) {
                 
                    ParentalControlButton.innerHTML='Deactivate Parental Control'; 
                    
                } else {
                    
                    ParentalControlButton.innerHTML='Activate Parental Control'; 

                }
                
            }, 2000);

        }

    })

    if (localStorage.getItem('ParentalControlPin')) {
                 
        ParentalControlButton.innerHTML='Deactivate Parental Control'; 
        
    } else {
        
        ParentalControlButton.innerHTML='Activate Parental Control'; 

    }

}
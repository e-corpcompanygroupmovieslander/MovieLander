WATCHTRAILOR=(element)=>{

    DIV.innerHTML=`

        <div class='MovieHolderPlayer'>
        
            <img  id='BackDetails'  class='BackIcon' src='../Images/Icons/back.png'/>
    
            <iframe class='TrailorPlayer' control src='${TRAILORPATH+element.MoveTrailer}'/>

            

        </div>
    
       

    `;

    const BackDetails=document.querySelector('#BackDetails');

    BackDetails.addEventListener('click',()=>{

        MOVIESDETAILS(element);

    })

}
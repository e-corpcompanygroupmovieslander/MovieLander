MODES=()=>{

    const ModeId=document.querySelector('#ModeId');

    const ModeImageId=document.querySelector('#ModeImageId');;

    if (localStorage.getItem('Mode')==='Dark') {
        
        ModeId.innerHTML='Dark';

        ModeImageId.src='../../Images/Icons/moon.png';

        localStorage.setItem('ModeColour','#5C829A');

        localStorage.setItem('Mode','light');

        DIV.style.background='#5C829A';


    } else {
        
        ModeId.innerHTML='Light';

        ModeImageId.src='../../Images/Icons/sun.png';

        localStorage.setItem('ModeColour','#00000080');

        localStorage.setItem('Mode','Dark');

        DIV.style.background='#00000080';

    }

}
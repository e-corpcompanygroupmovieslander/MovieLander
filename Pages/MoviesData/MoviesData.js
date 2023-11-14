MOVIESDATA=(element)=>{

    DIV.innerHTML = `

    <div id='SavedMoviesDiv' class='MainDiv'></div>

    <img id='BackIcon'  class='BackIcon' src='./Images/Icons/back.png'/>

    `;

    const BackDetails=document.querySelector('#BackIcon');

    BackDetails.addEventListener('click',()=>{

        MOVIESDETAILS(element);

    })

    const MAINDIV=document.querySelector('#SavedMoviesDiv');

    if (element.MovieDetails) {
        
        MAINDIV.innerHTML=element.MovieDetails;

    } else {
       
        MAINDIV.innerHTML=`

        <h1 class='NoMovies'>No Movies Details</h1>

        `;
        
    }

}
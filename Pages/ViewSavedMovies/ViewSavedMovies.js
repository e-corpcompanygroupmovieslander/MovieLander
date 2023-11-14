VIEWSAVEDMOVIES = () => {

    DIV.innerHTML = `

        <div id='SavedMoviesDiv' class='MainDiv'></div>
        <img onclick='USERACCOUNTPAGE()' class='BackIcon' src='../Images/Icons/back.png'/>
    
    `;

    const SeeMoreMoviesDiv=document.querySelector('#SavedMoviesDiv');

    const SAVEDDATA = localStorage.getItem('SavedMovies');

    // Check if there are any saved movies in local storage
    if (SAVEDDATA) {

        const savedMoviesArray = JSON.parse(SAVEDDATA);

        // Iterate over the saved movies
        savedMoviesArray.forEach(element => {
            
            const MoviesDivHolder=document.createElement('div');
            MoviesDivHolder.classList.add('SeeMoviesDivHolder');

            const MOVIESIMAGE=document.createElement('img');
            MOVIESIMAGE.src='../Images/Logos/movie lander logo.jpg';
            MOVIESIMAGE.classList.add('ADVERTSIMAGE');

            MOVIESIMAGE.addEventListener('load',()=>{
              
                MOVIESIMAGE.src=MOVIESPATH+element.MovieImage;
                
            })

            MOVIESIMAGE.addEventListener('click',()=>{

                MOVIESDETAILS(element);

            })

            MoviesDivHolder.append(MOVIESIMAGE);

            SeeMoreMoviesDiv.append(MoviesDivHolder);
    
        });
    } else {
        
        SeeMoreMoviesDiv.innerHTML=`
        
        <h1 class='NoMovies'>No Movies Saved</h1>

        `;

    }
}

MOVIESDETAILS=(element)=>{

    DIV.innerHTML=`

    <img class='MoviesImage' src='${MOVIESPATH+element.MovieImage}'/>

    <img onclick='HOMEPAGE()' class='BackIcon' src='../Images/Icons/back.png'/>

    <img id='SaveMovieIcon'  class='SaveIcon' src=''/>

    <iframe class='Player' src='${TRAILORPATH+element.MovieImage}'></iframe>

    <button class='Play'>Play</button>
    
    <div class='MoviesDetails'>

        <h1 class='MovieName'>${element.MovieName}</h1>

        <div class='Specialfeatures'>

            <div class='Sections'>
            
                <img  class='SectionIcon' src='../Images/Icons/grid.png'/>
                
                <h1 class='MovieCatergories'>${element.Catergory}</h1>

            </div>

            <div class='Sections'>
            
                <img  id='PremiumIcon' class='SectionIcon' src=''/>
                
                <h1 id='PremiumMessage' class='MovieCatergories'></h1>

            </div>

            <div class='Sections'>
            
                <img id='RatingIcon'  class='SectionIcon' src='../Images/Icons/rate.png'/>
                
                <h1 class='MovieCatergories'>${element.Rated}</h1>

            </div>

        </div>

        <div id='RoundedFooterMovieDetails' class='RoundFooter'>

            <img id='ReviewSection' class='RoundFooterIcon' src='/Images/Icons/review.png'/>

            <img id='MoviesDataPage' class='RoundFooterIcon' src='/Images/Icons/library.png'/>

            <img onclick='MAINPAGESITE()' class='RoundFooterIcon' id='MoreIcon' src='/Images/Icons/more.png'/>

        </div>
    
    </div>
    
    `;

    const PremiumIcon=document.querySelector('#PremiumIcon');

    const PremiumMessage=document.querySelector('#PremiumMessage');

    if (element.Subscription) {
        
        PremiumIcon.src='../../Images/Icons/lock.png';

        PremiumMessage.innerHTML='Paid';

    } else {
       
        PremiumIcon.src='../../Images/Icons/unlocked.png';

        PremiumMessage.innerHTML='Free';
        
    }

    const  Play=document.querySelector('.Play');

    Play.addEventListener('click',()=>{

        WATCHTRAILOR(element);

    })

    const SaveMovieIcon=document.querySelector('#SaveMovieIcon');

       // Retrieve existing saved movies from localStorage
       let SAVEDMOVIES = JSON.parse(localStorage.getItem('SavedMovies')) || [];

       const isMovieSaved = SAVEDMOVIES.some(savedMovie => savedMovie.MovieName === element.MovieName);
   
       if (isMovieSaved) {
           // If the movie is already saved, remove it from the array
           SAVEDMOVIES = SAVEDMOVIES.filter(savedMovie => savedMovie.MovieName !== element.MovieName);
   
           SaveMovieIcon.src = '../Images/Icons/saved.png';

       } else {
         
           SaveMovieIcon.src = '../Images/Icons/save.png';
       }
  
    SaveMovieIcon.addEventListener('click',()=>{

        SAVEMOVIES(element);

    })

    const MoviesDataPage=document.querySelector('#MoviesDataPage');

    MoviesDataPage.addEventListener('click',()=>{
        
        MOVIESDATA(element);

    })

    const ReviewSection=document.querySelector('#ReviewSection');

    ReviewSection.addEventListener('click',()=>{
        
        REVIEWMOVIE(element);

    })

}
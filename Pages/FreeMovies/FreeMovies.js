FREEMOVIES=()=>{

    DIV.innerHTML=`

    <img onclick='HOMEPAGE()' class='BackIcon' src='../Images/Icons/back.png'/>

    <iframe id='FreePlayer' class='Player' src=''></iframe>

    <div class='FreeMoviesDiv'></div>


    `;

    const MOVIESDIV=document.querySelector('.FreeMoviesDiv');

    
    const PLAYER=document.querySelector('#FreePlayer');


    fetch(FREEMOVIESLINK)

    .then(res =>res.json())

    .then(data =>{

        data.forEach(element => {

            PLAYER.src=TRAILORPATH+element.MoveTrailer;
            
            const MoviesDivHolder=document.createElement('div');
            MoviesDivHolder.classList.add('FreeMoviesDivs');

            const MOVIESIMAGE=document.createElement('img');
            MOVIESIMAGE.src='../Images/Logos/movie lander logo.jpg';
            MOVIESIMAGE.classList.add('ADVERTSIMAGE');

            MOVIESIMAGE.addEventListener('load',()=>{
              
                MOVIESIMAGE.src=MOVIESPATH+element.MovieImage;
                
            })

            MOVIESIMAGE.addEventListener('click',()=>{
                
                PLAYER.src=TRAILORPATH+element.MoveTrailer;

            })

            MoviesDivHolder.append(MOVIESIMAGE);

            MOVIESDIV.append(MoviesDivHolder);

        });


    })

    .catch(error=>console.log(error))



}
SEEMOREMOVIES=(URL)=>{

    DIV.innerHTML=`

    <div id='SeeMoreMoviesDiv' class='MainDiv'></div>

    <img onclick='HOMEPAGE()' class='BackIcon' src='../Images/Icons/back.png'/>

    `;

    const SeeMoreMoviesDiv=document.querySelector('#SeeMoreMoviesDiv');

    SeeMoreMoviesDiv.innerHTML=`
    
    <img class='LoadingIcon' id='BigLoading' src='../Images/Icons/loading.png'/>

    `;

    fetch(URL)

    .then(res =>res.json())

    .then(data =>{

        SeeMoreMoviesDiv.innerHTML=``;

        SHUFFLEDATA(data);

        data.forEach(element => {

            const MoviesDivHolder=document.createElement('div');
            MoviesDivHolder.classList.add('SeeMoviesDivHolder');

            const MOVIESIMAGE=document.createElement('img');
            MOVIESIMAGE.src='./Images/Logos/movie lander logo.jpg';
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

    })

    .catch(error=>console.log(error))

}
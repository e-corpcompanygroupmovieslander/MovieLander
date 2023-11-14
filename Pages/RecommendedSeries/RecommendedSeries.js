RECOMMENDEDSERIES=()=>{

    const URL=SERIESLINK;

    const ANIMATIONDIV=document.querySelector('#SeriesDiv');

    fetch(URL)

    .then(res =>res.json())

    .then(data =>{

        SHUFFLEDATA(data);

        data.forEach(element => {

            const MoviesDivHolder=document.createElement('div');
            MoviesDivHolder.classList.add('MoviesDivHolder');

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

            ANIMATIONDIV.append(MoviesDivHolder);

        });

    })

    .catch(error=>console.log(error))

    const SEEMOREBUTTON=document.querySelector('#SeeMoreSeries');

    SEEMOREBUTTON.addEventListener('click',()=>{

        SEEMOREMOVIES(URL);

    })

}
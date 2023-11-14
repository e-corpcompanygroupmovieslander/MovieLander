HOMEPAGE=()=>{

    DIV.innerHTML=`

    <div class='MainDiv' id='Main' >
    
        <div class='AdvertsDiv'></div>

        <div class='MoviesDiv'>

            <h1 class='RecommendedTitle'>Recommended Animations</h1>

            <h1 id='SeeMoreAnimations' class='RecommendedSeeMore'>See More</h1>

            <div class='MoviesSectionDiv' id='AnimationsDiv'></div>
        
        </div>

       
        <div class='MoviesDiv'>

            <h1 class='RecommendedTitle'>Recommended Movies</h1>

            <h1 id='SeeMoreMovies' class='RecommendedSeeMore'>See More</h1>

            <div class='MoviesSectionDiv' id='MoviesDiv'></div>
    
        </div>

        <div class='MoviesDiv'>

            <h1 class='RecommendedTitle'>Recommended Marathons</h1>

            <h1 id='SeeMoreMarathons' class='RecommendedSeeMore'>See More</h1>

            <div class='MoviesSectionDiv' id='MarathonDiv'></div>

        </div>

        <div class='MoviesDiv'>

            <h1 class='RecommendedTitle'>Recommended Series</h1>

            <h1 id='SeeMoreSeries' class='RecommendedSeeMore'>See More</h1>

            <div class='MoviesSectionDiv' id='SeriesDiv'></div>

        </div>

    </div>
    
    <div class='RoundFooter' id='HomeFooter'>

        <img onclick='CATORGORYPAGE()' class='RoundFooterIcon' src='./Images/Icons/list.png'/>

        <img onclick='FREEMOVIES()' class='RoundFooterIcon' src='./Images/Icons/movies.png'/>

        <img onclick='USERACCOUNTPAGE()' class='RoundFooterIcon' src='./Images/Icons/profile.png'/>
    
    </div>
    
    `;

    const RoundFooter=document.querySelector('#HomeFooter');

    const Main=document.querySelector('#Main');

    if (navigator.onLine) {

        ADVERTSPAGE();

        RECOMMENDEDANIMATION();
    
        RECOMMENDEDMOVIES();
    
        RECOMMENDEDMARATHONS();
    
        RECOMMENDEDSERIES();

    } else {
        
       
        Main.innerHTML=`
    
        <img class='LoadingIcon' id='BigLoading' src='./Images/Icons/loading.png'/>
    
        `;
    
    }
      

    let prevScrollPos = Main.scrollTop;

    Main.addEventListener('scroll', () => {

        const currentScrollPos = Main.scrollTop;

        if (currentScrollPos > prevScrollPos) {
            // Scrolling down, hide the footer
            RoundFooter.style.display = 'none';
        } else {
            // Scrolling up, show the footer
            RoundFooter.style.display = 'inline-flex';
        }

        prevScrollPos = currentScrollPos;

    });

    if (localStorage.getItem('Mode')==='Dark') {
    
        RoundFooter.style.background='#00000080';
    
    } else {
        
        RoundFooter.style.background='#5C829A';
    
    }

}


ADVERTSPAGE=()=>{

    const ADVERTSDIV=document.querySelector('.AdvertsDiv');

    fetch(ADVERTSLINK)

    .then(res=>res.json())

    .then(data=>{

        SHUFFLEDATA(data);

        data.forEach(element => {
            
            const ADVERTSDIVHOLDER=document.createElement('div');
            ADVERTSDIVHOLDER.classList.add('ADVERTSDIVHOLDER');

            ADVERTSDIV.append(ADVERTSDIVHOLDER);

            const ADVERTSIMAGE=document.createElement('img');
            ADVERTSIMAGE.src='../Images/Logos/movie lander logo.jpg';
            ADVERTSIMAGE.classList.add('ADVERTSIMAGE');

            ADVERTSIMAGE.addEventListener('load',()=>{
              
                ADVERTSIMAGE.src=ADVERTSPATH+element.ADVERTIMAGE;
                
            })

            ADVERTSIMAGE.addEventListener('click',()=>{

                open(element.ADVERTLINK);

            })

            ADVERTSDIVHOLDER.append(ADVERTSIMAGE);

        });

    })

    .catch(error=>console.log(error))

}
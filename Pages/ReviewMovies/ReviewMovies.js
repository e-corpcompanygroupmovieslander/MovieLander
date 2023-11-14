REVIEWMOVIE = (element) => {

    DIV.innerHTML = `
        <div id='SavedMoviesDiv' class='MainDiv'>
            <div id='ReviewDivs' class='ParentalControlDiv'></div>
            <input id='ReviewInput' class='ParentalControlInput' type="text" maxlength="1000" placeholder="Write Your Thoughts Here">
            <button id='SaveReview' class='ParentalControlButton'>Save Review</button>
            <img id='BackIcon' class='BackIcon' src='../Images/Icons/back.png'/>
        </div>
    `;

    const BackDetails = document.querySelector('#BackIcon');
    BackDetails.addEventListener('click', () => {
        MOVIESDETAILS(element);
    });

    const MAINDIV = document.querySelector('#ReviewDivs');

    // Retrieve existing reviews from local storage
    let movieReviews = JSON.parse(localStorage.getItem('MovieReviews')) || [];

    // Display existing reviews for the current movie
    const existingReview = movieReviews.find(review => review.MovieName === element.MovieName);
    if (existingReview) {
        MAINDIV.innerHTML = `<p class='MyReview'>${existingReview.Review}</p>`;
    } else {
        MAINDIV.innerHTML = `<h1 class='NoMovies'>No Movies Reviews</h1>`;
    }

    const SAVEREVIEWBUTTON = document.querySelector('#SaveReview');
    const REVIEWINPUT = document.querySelector('#ReviewInput');

    SAVEREVIEWBUTTON.addEventListener('click', () => {
        if (REVIEWINPUT.value.length > 1) {
            // Check if the movie name already exists in the array
            const existingReviewIndex = movieReviews.findIndex(review => review.MovieName === element.MovieName);

            if (existingReviewIndex !== -1) {
                // If the movie name exists, update the review
                movieReviews[existingReviewIndex].Review = REVIEWINPUT.value;
            } else {
                // If the movie name doesn't exist, create a new review object
                const newReviewObject = {
                    MovieName: element.MovieName,
                    Review: REVIEWINPUT.value
                };
                // Add the new review object to the array
                movieReviews.push(newReviewObject);
            }

            // Store the updated array in local storage
            localStorage.setItem('MovieReviews', JSON.stringify(movieReviews));

            // Display the updated or new review
            MAINDIV.innerHTML = `<p class='MyReview'>${REVIEWINPUT.value}</p>`;

            // Clear the input field
            REVIEWINPUT.value = '';

        } else {
            SAVEREVIEWBUTTON.innerHTML = `
                Please Write A Review 
            `;

            setTimeout(() => {
                SAVEREVIEWBUTTON.innerHTML = `
                    Save Review 
                `;
            }, 2000);
        }
    });
}

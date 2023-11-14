SAVEMOVIES = (element) => {
    const SaveMovieIcon = document.querySelector('#SaveMovieIcon');

    // Retrieve existing saved movies from localStorage
    let SAVEMOVIES = JSON.parse(localStorage.getItem('SavedMovies')) || [];

    const isMovieSaved = SAVEMOVIES.some(savedMovie => savedMovie.MovieName === element.MovieName);

    if (isMovieSaved) {
        // If the movie is already saved, remove it from the array
        SAVEMOVIES = SAVEMOVIES.filter(savedMovie => savedMovie.MovieName !== element.MovieName);

        // Save the updated array back to localStorage
        localStorage.setItem('SavedMovies', JSON.stringify(SAVEMOVIES));

        SaveMovieIcon.src = '/Images/Icons/save.png';
    } else {
        // Add the new element to the array
        SAVEMOVIES.push(element);

        // Save the updated array back to localStorage
        localStorage.setItem('SavedMovies', JSON.stringify(SAVEMOVIES));

        SaveMovieIcon.src = '/Images/Icons/saved.png';
    }
}

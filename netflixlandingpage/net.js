// Get all movie images
const movieImages = document.querySelectorAll('.movie');

// Get the movie info section elements
const movieInfo = document.getElementById('movie-info');
const movieTitle = document.getElementById('movie-title');
const movieDescription = document.getElementById('movie-description');
const playButton = document.getElementById('play-button');

// Event listener for when a movie image is clicked
movieImages.forEach(image => {
    image.addEventListener('click', () => {
        // Show the movie info section
        movieInfo.style.display = 'block';
        
        // Get movie data from the clicked image's data attributes
        const title = image.getAttribute('data-title');
        const description = image.getAttribute('data-description');
        const playUrl = image.getAttribute('data-play-url');
        
        // Update the content of the movie info section
        movieTitle.textContent = title;
        movieDescription.textContent = description;

        // When the play button is clicked, open the play URL
        playButton.onclick = function() {
            window.location.href = playUrl; // Redirect to the play URL
        };
    });
});

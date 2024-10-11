const API_KEY = 'api_key=9068b1583036f1f026a92bc56c96058a';
const NETWORKS_API_KEY = '9068b1583036f1f026a92bc56c96058a';
 const BASE_URL = 'https://api.themoviedb.org/3';
 const MOVIES_API_URL = BASE_URL + '/trending/movie/week?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&'+API_KEY;
 const TVSHOWS_API_URL = BASE_URL + '/trending/tv/week?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&'+API_KEY;
 const ANIME_API_URL = BASE_URL + '/discover/tv?api_key=9068b1583036f1f026a92bc56c96058a&language=en-US&sort_by=popularity.desc&with_genres=16&page=1';
 const HIGHEST_RATED_MOVIES_API_URL = BASE_URL + '/movie/top_rated?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&'+API_KEY;
 const HIGHEST_RATED_SHOWS_API_URL = BASE_URL + '/tv/top_rated?api_key=9068b1583036f1f026a92bc56c96058a&language=en-US&page=1';
 const TRENDING_MOVIES_API = BASE_URL + '/trending/movie/day?' + API_KEY;
 const MAIN_POSTER_IMG_URL = 'https://image.tmdb.org/t/p/w780';
 const IMG_URL = 'https://image.tmdb.org/t/p/w500';
 const SEARCH_API = `${BASE_URL}/search/multi?${API_KEY}&query=`;
const DISCOVER_API_KEY = 'api_key=9068b1583036f1f026a92bc56c96058a';
   const DISCOVER_BASE_URL = 'https://api.themoviedb.org/3';
   const DISCOVER_IMG_URL = 'https://image.tmdb.org/t/p/w500';
   const NETWORKS_API_URL = `${BASE_URL}/network/`;
const DISCOVER_API_URL = `${BASE_URL}/discover/tv?api_key=${NETWORKS_API_KEY}&with_networks=`;
/*const FILM_DETAILS_API_KEY = '9068b1583036f1f026a92bc56c96058a';
 const FILM_DETAILS_API_URL = 'https://api.themoviedb.org/3/search/multi?api_key={FILM_API_KEY}&language=en-US&query={query}';*/

        // Movies URLs for 60 movies (3 pages)
        const MOVIES_API_URL_PAGE_1 = `${DISCOVER_BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&${DISCOVER_API_KEY}`;
        const MOVIES_API_URL_PAGE_2 = `${DISCOVER_BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc&${DISCOVER_API_KEY}`;
        const MOVIES_API_URL_PAGE_3 = `${DISCOVER_BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=3&sort_by=popularity.desc&${DISCOVER_API_KEY}`;

        // TV Shows URLs for 60 shows (3 pages)
        const TVSHOWS_API_URL_PAGE_1 = `${DISCOVER_BASE_URL}/discover/tv?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&${DISCOVER_API_KEY}`;
        const TVSHOWS_API_URL_PAGE_2 = `${DISCOVER_BASE_URL}/discover/tv?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc&${DISCOVER_API_KEY}`;
        const TVSHOWS_API_URL_PAGE_3 = `${DISCOVER_BASE_URL}/discover/tv?include_adult=false&include_video=false&language=en-US&page=3&sort_by=popularity.desc&${DISCOVER_API_KEY}`;

        // Anime URLs (fetching anime shows from TMDb)
        const ANIME_API_URL_PAGE_1 = `${DISCOVER_BASE_URL}/discover/tv?with_genres=16&language=en-US&page=1&sort_by=popularity.desc&${DISCOVER_API_KEY}`;
        const ANIME_API_URL_PAGE_2 = `${DISCOVER_BASE_URL}/discover/tv?with_genres=16&language=en-US&page=2&sort_by=popularity.desc&${DISCOVER_API_KEY}`;
        const ANIME_API_URL_PAGE_3 = `${DISCOVER_BASE_URL}/discover/tv?with_genres=16&language=en-US&page=3&sort_by=popularity.desc&${DISCOVER_API_KEY}`;
   
   
   
   
   const homeoriginalContent = `
	<div id="body-content">
    <div class="top-dashboard">
      <div class="left-side">
   <!--   <img class="netflix-icon" src="Thumbnails/netflix.png">-->
   <p class="app-logo">
   <span class="app-name">NYX</span>
 <!--  <span class="fas fa-star"></span>-->
   	</p>
      </div>
      <div class="right-side">
     <!-- 	<div id="homesearchContainer">
      <i id="homesearchIcon" class="fas fa-search"></i>
      </div>-->
      <i class="fas fa-user-circle"></i>
    <!-- <img class="user-account-image" src="Thumbnails/user-account.png">-->
      </div>
    </div>
    
    <div class="main-poster">
    <img class="poster1" id="mainPoster">
    <div class="poster-gradient">
     	<p class="main-poster-title"></p>
    	<p class="main-poster-genres"></p>
    </div>
   <!-- main posters will be displayed here-->
   <!--   <div class="main-poster-options">
        <div class="left-section">--
        <img class="plus-icon" src="Thumbnails/plus.svg">--
        <p class="my-list" style="font-size: 15px ;font-weight: 500">My List</p>
        </div>
        <div class="middle-section">
          <img class="play-icon" src="Thumbnails/play.svg">
          <p class="play" style="color: black ; font-weight: 600">Play</p>
        </div>
        <div class="right-section">
          <img class="info-icon" src="Thumbnails/info.svg">
          <p class="info" style="font-weight: 500">Info</p>
        </div>
      </div>-->
    </div>
    

    
  <div class="container">
      <div>
        <p class="container-title">Trending Movies</p>
      </div>
      <div class="movie" id="movie">
<!-- movies will be inserted here-->

      </div>
      </div>
      
        <div class="container">
      <div>
        <p class="container-title">Trending TV Shows</p>
      </div>
      <div class="shows" id="shows">
    <!-- movies will be shown hete-->
      </div>
      </div>
      
        <div class="container">
      <div>
        <p class="container-title">Anime</p>
      </div>
      <div class="anime" id="anime">
      <!-- tv shows will be shown here-->
      </div>
      </div>
      
      <div class="container">
      <div>
        <p class="container-title">Popular IMDB Movies</p>
      </div>
      <div class="highest-rated-movies" id="highest-rated-movies">
      <!-- tv shows will be shown here-->
      </div>
      </div>
      
      
       <div class="container" style="margin-bottom:55px">
      <div>
        <p class="container-title">Popular IMDB TV Shows</p>
      </div>
      <div class="highest-rated-shows" id="highest-rated-shows">
  <!-- anime will be shown here-->
      </div>
      </div>
      </div>



`

   
        
  const genreMap = {
    28: 'Action',
    12: 'Adventure',
    16: 'Animation',
    35: 'Comedy',
    80: 'Crime',
    99: 'Documentary',
    18: 'Drama',
    10751: 'Family',
    14: 'Fantasy',
    36: 'History',
    27: 'Horror',
    10402: 'Music',
    9648: 'Mystery',
    10749: 'Romance',
    878: 'Science Fiction',
    10770: 'TV Movie',
    53: 'Thriller',
    10752: 'War',
    37: 'Western'
};    


let currentNetworkId;
let currentNetworkName;
        
        
       /*networks = [
    { id: 213, name: 'Netflix' },
    { id: 49, name: 'HBO' },
    { id: 1024, name: 'Prime Video' },
    { id: 2552, name: 'Apple TV+' },
    { id: 2739, name: 'Disney+' },
    { id: 19, name: 'Fox' },
    { id: 453, name: 'Hulu' },
    { id: 174, name: 'AMC' },
    { id: 71, name: 'The CW' },
    { id: 67, name: 'Showtime' },
    { id: 88, name: 'FX' },
    { id: 6, name: 'NBC' },
    { id: 4, name: 'BBC One' },
    { id: 64, name: 'Discover' },
    { id: 56, name: 'Cartoon Network' },
    { id: 13, name: 'Nickelodeon' },
    { id: 29, name: 'ESPN' },
    { id: 30, name: 'USA Network' },
    
    // Add more network IDs here as needed
    ];*/
 
 
 // Initialize the home page when the script loads
document.addEventListener('DOMContentLoaded', initializeHomePage);

 function initializeHomePage() {
 /*	document.addEventListener('DOMContentLoaded', () => {*/
    getMainPoster();
    getMainPosterWithCycle();
    getMovies(MOVIES_API_URL);
    getTVShows(TVSHOWS_API_URL);
    getAnime(ANIME_API_URL);
    getHighestRatedMovies(HIGHEST_RATED_MOVIES_API_URL);
    getHighestRatedShows(HIGHEST_RATED_SHOWS_API_URL);
   // initializeSearchFunctionality();
 	
}




window.addEventListener("scroll", function() {
    const topDashboard = document.querySelector('.top-dashboard');
    if(topDashboard){
    // Get the current scroll position
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Calculate the opacity based on scroll. You can adjust '300' for fading speed.
    const maxScroll = 300; // Scroll distance at which the element will disappear
    const opacity = Math.max(1 - scrollTop / maxScroll, 0);
    
    // Apply the calculated opacity to the top-dashboard
    topDashboard.style.opacity = opacity;
    }
});





    const homeButton = document.getElementById('homeButton');
    const searchButton = document.getElementById('searchButton');
    const settingsButton = document.getElementById('settingsButton');
   const watchlistButton = document.getElementById('watchlistButton');
    
    if (homeButton) {
        homeButton.addEventListener('click', () => {
            loadPage('index.html');
        });
    }

    if (searchButton) {
        searchButton.addEventListener('click', () => {
            loadPage('Search.html');
        });
    }

    if (settingsButton) {
        settingsButton.addEventListener('click', () => {
            loadPage('settings.html');
        });
    }
    
    if (watchlistButton) {
        watchlistButton.addEventListener('click', () => {
            loadPage('Watchlist.html');
        });
    }



function loadPage(page) {
    const newPage = document.getElementById('body-content');
    newPage.innerHTML = ''; // Clear existing content

    fetch(page)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
        //	console.log(data);
            newPage.innerHTML = data; // Load new content
            // After loading the new page, re-trigger the necessary API calls
      if (page === 'index.html') {
        initializeHomePage();
            }
      else if (page === 'Search.html') {
          loadSearchScript();
        initializeSearchFunctionality();
        displayNetworkLogos();
      }
      
     else if (page === 'Watchlist.html') {
          loadWatchlistScript();
          displayWatchlist();
      }
      
      else if (page === 'settings.html') {
           loadSettingsScript();
            }
        })
        .catch(error => console.error('Error loading page:', error));
}



window.addEventListener('DOMContentLoaded', loadSearchScript);
// Function to dynamically load the search.js scriptfunction

 function loadSearchScript() {
    console.log('loadSearchScript function is called.');
    const script = document.createElement('script');
    script.src = 'Search.js';

    script.onload = function() {
        console.log('Search.js loaded successfully.');
        
        // Call the initialization function after the script is loaded
      /*  if (typeof initializeSearchPage === 'function') {
            initializeSearchPage();
      console.log('initializeSearchPage found')
        } else {
            console.error('initializeSearchPage function not found');
        }*/
        
      /* if (typeof displayNetworkLogos === 'function') {
            displayNetworkLogos();
        } else {
            console.error('displayNetworkLogo function not found');
        }*/
    };

    script.onerror = function() {
        console.error('Error loading search.js');
    };

    document.body.appendChild(script);
}


window.addEventListener('DOMContentLoaded', loadSettingsScript);
// Function to dynamically load the settings.js script
function loadSettingsScript() {
    const script = document.createElement('script');
    script.src = 'Settings.js'; // Path to Settings.js
    script.onload = function() {
        console.log('Settings.js loaded successfully.');
        // Any additional initialization for settings.js can be added here if needed
    };
    script.onerror = function() {
        console.error('Error loading Settings.js');
    };
    document.body.appendChild(script); // Append script to body to load it dynamically
}


window.addEventListener('DOMContentLoaded', loadWatchlistScript);
// Function to dynamically load the watchlist.js script
function loadWatchlistScript() {
    const script = document.createElement('script');
    script.src = 'Watchlist.js'; // Path to Settings.js
    script.onload = function() {
        console.log('Watchlist.js loaded successfully.');
        // Any additional initialization for settings.js can be added here if needed
    };
    script.onerror = function() {
        console.error('Error loading Watchlist.js');
    };
    document.body.appendChild(script); // Append script to body to load it dynamically
}




function getMainPoster() {
	
    const mainPosterImage = document.getElementById('mainPoster');
    if (!mainPosterImage) {
        console.error("Main Poster Image element not found");
        return;
    }

    fetch(TRENDING_MOVIES_API)
        .then(response => response.json())
        .then(data => {
            console.log(data.results);
            if (data.results && data.results.length > 0) {
                const firstMovie = data.results[0];
                mainPosterImage.src = MAIN_POSTER_IMG_URL + firstMovie.poster_path;
                mainPosterImage.alt = firstMovie.title;
      /*    mainPosterGenre.genre_ids= firstmovie.genre_ids*/
            }
        })

        .catch(error => console.error('Error fetching TMDb image:', error));
	
}


function cycleMainPosters(movies) {
    let currentIndex = 0;
    const mainPosterImage = document.getElementById('mainPoster');
const movieTitleElement = document.querySelector('.main-poster-title');
const movieGenresElement = document.querySelector('.main-poster-genres');

    function updatePoster() {
        const movie = movies[currentIndex];
      



    // Ensure that the elements exist before setting their properties
    if (mainPosterImage && movieTitleElement && movieGenresElement) {
        // Update poster image and title
        mainPosterImage.src = MAIN_POSTER_IMG_URL + movie.poster_path;
        mainPosterImage.alt = movie.title;
        movieTitleElement.textContent = movie.title;

// Clear existing genres
        movieGenresElement.innerHTML = '';

        // Map genre IDs to genre names and create separate boxes for each
        if (movie.genre_ids && movie.genre_ids.length > 0) {
            movie.genre_ids.forEach(id => {
                const genreName = genreMap[id]; // Get genre name from the map
                const genreBox = document.createElement('span'); // Create a span for each genre
                genreBox.textContent = genreName;
                genreBox.classList.add('genre-box'); // Add a class for styling
                movieGenresElement.appendChild(genreBox); // Append genre to the container
            });
        } else {
            movieGenresElement.textContent = "No genres available";
        }
    } else {
        console.error("One or more elements not found in the DOM.");
    }

        // Store the current movie for later use in the click event
        mainPosterImage.dataset.currentMovie = JSON.stringify(movie); // Store movie as a string
        currentIndex = (currentIndex + 1) % movies.length;
    }

    updatePoster(); // Set initial poster
    setInterval(updatePoster, 10000); // Change image every 10 seconds

    // Add click event to display movie details when poster is clicked
    mainPosterImage.addEventListener('click', () => {
        // Parse the stored current movie data
        const movie = JSON.parse(mainPosterImage.dataset.currentMovie);

        // Create a new div for the movie details
        const movieDetailsDiv = document.createElement('div');
        movieDetailsDiv.classList.add('item-details'); // Add styling class
        movieDetailsDiv.innerHTML = `
              <div class="item-top-dashboard">
   <span  id="back-button" class="fas fa-arrow-left"></span>
   <span class="fas fa-film"></span>
   </div>
  <div class= "poster-details">
   <div class="item-poster">
  <img class="item-image" src="${MAIN_POSTER_IMG_URL}${movie.poster_path}" alt="${movie.title}">
  </div>
  <div class="item-poster-details">
  <div class="item-poster-detail">
   <p class="item-title">${movie.title}</p>
     </div>
      <div class="item-poster-detail">
    <p>Aired:</p>
    <p class="release-date" > ${movie.release_date || movie.first_air_date}</p>
      </div>
       <div class="item-poster-detail">
  <p>IMDB:</p>
  
  <p class="rating"><span class="fas fa-star"></span>${movie.vote_average}</p>
    </div>
   </div>
   </div>
   
  <div class="overview">
  <p>${movie.overview}</p>
  <div class="item-details-gradient" ></div>
  <i class= fas fa-caret-down"></i>
  </div>
   <div id="bookmark-icon">
                    <span class="far fa-bookmark"></span>
                </div>
        `;

        // Clear the main poster section and display the movie details
        const bodyContent = document.getElementById('body-content');
        bodyContent.innerHTML = ''; // Clear current content
        bodyContent.appendChild(movieDetailsDiv); // Add movie details
        document.getElementById('back-button').addEventListener('click', () => {
        goBackToHomePage(); // Return to the original search page
    });
    
       // Set current movie
       currentItem = movie;
    
   // Bookmark icon event
               // Bookmark icon event
            const bookmarkIcon = movieDetailsDiv.querySelector('#bookmark-icon .far');
            const watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
            
            // Check if show is already in watchlist
            if (watchlist.some(item => item.id === currentItem.id)) {
                bookmarkIcon.classList.replace('far', 'fas');
            } else {
                bookmarkIcon.classList.replace('fas', 'far');
            }

            bookmarkIcon.addEventListener('click', () => {
                const existingIndex = watchlist.findIndex(item => item.id === currentItem.id);
                if (existingIndex === -1) {
                    watchlist.push({
                        id: currentItem.id,
                        title: currentItem.title ||currentItem.name,
                        poster_path: currentItem.poster_path,
                        media_type: 'movie'
                    });
                    localStorage.setItem('watchlist', JSON.stringify(watchlist));
                    bookmarkIcon.classList.replace('far', 'fas');
                } else {
                    watchlist.splice(existingIndex, 1);
                    localStorage.setItem('watchlist', JSON.stringify(watchlist));
                    bookmarkIcon.classList.replace('fas', 'far');
                }
            });
        });
}

function getMainPosterWithCycle() {
    fetch(TRENDING_MOVIES_API)
        .then(response => response.json())
        .then(data => {
            if (data.results && data.results.length > 0) {
                cycleMainPosters(data.results);
            }
        })
        .catch(error => console.error('Error fetching TMDb images:', error));
}

 
 
 function getMovies(url){
 	fetch(url).then(res => res.json()).then(data =>{
 		console.log(data.results)
 		 showMovies(data.results);
 	})
 }
 
 function showMovies(data) {
    const container = document.getElementById('movie');
    container.innerHTML = '';

    data.forEach(movie => {
        const { id, title, poster_path, overview, release_date, vote_average } = movie;

        const movieElement = document.createElement('div');
        movieElement.classList.add('item');
        movieElement.innerHTML = `
            <img class="item" src="${IMG_URL}${poster_path}" alt="${title}">
        `;

        movieElement.addEventListener('click', () => {
            const movieElementDetails = document.createElement('div');
            movieElementDetails.classList.add('item-details');
            movieElementDetails.innerHTML = `
                <div class="item-top-dashboard">
                    <span id="back-button" class="fas fa-arrow-left"></span>
                    <span class="fas fa-film"></span>
                </div>
                <div class="poster-details">
                    <div class="item-poster">
                        <img class="item-image" src="${IMG_URL}${poster_path}" alt="${title}">
                    </div>
                    <div class="item-poster-details">
                        <div class="item-poster-detail">
                            <p class="item-title">${title}</p>
                        </div>
                        <div class="item-poster-detail">
                            <p>Aired:</p>
                            <p class="release-date">${release_date}</p>
                        </div>
                        <div class="item-poster-detail">
                            <p>IMDB:</p>
                            <p class="rating"><span class="fas fa-star"></span>${vote_average}</p>
                        </div>
                    </div>
                </div>
                <div class="overview">
                    <p>${overview}</p>
                </div>
                <div id="bookmark-icon">
                    <span class="far fa-bookmark"></span>
                </div>
            `;

            const bodyContent = document.getElementById('body-content');
            bodyContent.innerHTML = '';
            bodyContent.appendChild(movieElementDetails);
            


            // Back button event
            document.getElementById('back-button').addEventListener('click', () => {
                goBackToHomePage();
            });
            
         // Set current movie
            currentItem = movie;

            // Bookmark icon event
            const bookmarkIcon = movieElementDetails.querySelector('#bookmark-icon .far');
            const watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
            
            // Check if movie is already in watchlist
            if (watchlist.some(item => item.id === currentItem.id)) {
                bookmarkIcon.classList.replace('far', 'fas');
            } else {
                bookmarkIcon.classList.replace('fas', 'far');
            }

            bookmarkIcon.addEventListener('click', () => {
                const existingIndex = watchlist.findIndex(item => item.id === currentItem.id);
                if (existingIndex === -1) {
                    watchlist.push({
                        id: currentItem.id,
                        title: currentItem.title,
                        poster_path: currentItem.poster_path,
                        media_type: 'movie'
                    });
                    localStorage.setItem('watchlist', JSON.stringify(watchlist));
                    bookmarkIcon.classList.replace('far', 'fas');
                } else {
                    watchlist.splice(existingIndex, 1);
                    localStorage.setItem('watchlist', JSON.stringify(watchlist));
                    bookmarkIcon.classList.replace('fas', 'far');
                }
            });
        });

        container.appendChild(movieElement);
    });
}
 
 
function getTVShows(url){
 	fetch(url).then(res => res.json()).then(data =>{
 		console.log(data.results)
 		 showTVShows(data.results);
});
 
 }
 
 function showTVShows(data){
 	
 	const container =	document.getElementById('shows');
 	
 	
 	container.innerHTML = '';
 	
 	data.forEach(show =>{
 	const {title, name, poster_path, overview, release_date, first_air_date, vote_average, media_type} = show;
 	
 	const showElement = document.createElement('div');
 	showElement.classList.add('item')
 	showElement.innerHTML=`
 <img class="item" src="${IMG_URL}${show.poster_path}" alt="${show.name}">
<!-- <div class="movie-info">
  <p class="movie-title">${show.name}</p>
  </div> -->
 `;
    // Add click event to navigate to movie-details.html with the movie ID in the URL
    showElement.addEventListener('click', () => {
            const showElementDetails = document.createElement('div');
            showElementDetails.classList.add('item-details');
            showElementDetails.innerHTML = ` 
            <div class="item-top-dashboard">
   <span  id="back-button" class="fas fa-arrow-left"></span>
   <span class="fas fa-film"></span>
   </div>
  <div class= "poster-details">
   <div class="item-poster">
  <img class="item-image" src="${IMG_URL}${poster_path}" alt="${name}">
  </div>
  <div class="item-poster-details">
  <div class="item-poster-detail">
   <p class="item-title">${name}</p>
     </div>
      <div class="item-poster-detail">
    <p>Aired:</p>
    <p class="release-date" > ${release_date || first_air_date}</p>
      </div>
       <div class="item-poster-detail">
  <p>IMDB:</p>
  
  <p class="rating"><span class="fas fa-star"></span>${vote_average}</p>
    </div>
   </div>
   </div>
   
  <div class="overview">
  <p>${overview}</p>
  <div class="item-details-gradient" ></div>
  <i class= fas fa-caret-down"></i>
  </div>
   <div id="bookmark-icon">
      <span class="far fa-bookmark"></span>
    </div>
 
            `;
            
            const bodyContent = document.getElementById('body-content');
            bodyContent.innerHTML = '';
            bodyContent.appendChild(showElementDetails); 
            

            
    document.getElementById('back-button').addEventListener('click', () => {
        goBackToHomePage(); // Return to the original search page
    }); 
    
        // Set current movie
       currentItem = show;
    
   // Bookmark icon event
               // Bookmark icon event
            const bookmarkIcon = showElementDetails.querySelector('#bookmark-icon .far');
            const watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
            
            // Check if show is already in watchlist
            if (watchlist.some(item => item.id === currentItem.id)) {
                bookmarkIcon.classList.replace('far', 'fas');
            } else {
                bookmarkIcon.classList.replace('fas', 'far');
            }

            bookmarkIcon.addEventListener('click', () => {
                const existingIndex = watchlist.findIndex(item => item.id === currentItem.id);
                if (existingIndex === -1) {
                    watchlist.push({
                        id: currentItem.id,
                        title: currentItem.name,
                        poster_path: currentItem.poster_path,
                        media_type: 'tv'
                    });
                    localStorage.setItem('watchlist', JSON.stringify(watchlist));
                    bookmarkIcon.classList.replace('far', 'fas');
                } else {
                    watchlist.splice(existingIndex, 1);
                    localStorage.setItem('watchlist', JSON.stringify(watchlist));
                    bookmarkIcon.classList.replace('fas', 'far');
                }
            });
        });
 container.appendChild(showElement);
 	});
 } 


function getAnime(url) {
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results);
        showAnime(data.results);
    });
}

function showAnime(data) {
    const container = document.getElementById('anime');
    container.innerHTML = '';

    data.forEach(anime => {
        const {title ,name, poster_path, overview, release_date, first_air_date, vote_average } = anime;
        const animeElement = document.createElement('div');
        animeElement.classList.add('item');
        animeElement.innerHTML = `
            <img class="item" src="${IMG_URL}${poster_path}" alt="${name ||title}">
        `;
        
        // Add click event to navigate to the anime details page
        animeElement.addEventListener('click', () => {
            const animeElementDetails = document.createElement('div');
            animeElementDetails.classList.add('item-details');
            animeElementDetails.innerHTML = ` 
             <div class="item-top-dashboard">
   <span  id="back-button" class="fas fa-arrow-left"></span>
   <span class="fas fa-film"></span>
   </div>
  <div class= "poster-details">
   <div class="item-poster">
  <img class="item-image" src="${IMG_URL}${poster_path}" alt="${name}">
  </div>
  <div class="item-poster-details">
  <div class="item-poster-detail">
   <p class="item-title">${name}</p>
     </div>
      <div class="item-poster-detail">
    <p>Aired:</p>
    <p class="release-date" > ${release_date || first_air_date}</p>
      </div>
       <div class="item-poster-detail">
  <p>IMDB:</p>
  
  <p class="rating"><span class="fas fa-star"></span>${vote_average}</p>
    </div>
   </div>
   </div>
   
  <div class="overview">
  <p>${overview}</p>
  <div class="item-details-gradient" ></div>
  <i class= fas fa-caret-down"></i>
  </div>
     <div id="bookmark-icon">
      <span class="far fa-bookmark"></span>
    </div>
 
            `;
            
            
            const bodyContent = document.getElementById('body-content');
            bodyContent.innerHTML = '';
            bodyContent.appendChild(animeElementDetails);
            
         // Set current movie
       currentItem = anime;
          
            
         
      document.getElementById('back-button').addEventListener('click', () => {
        goBackToHomePage(); // Return to the original search page
            });
        

   // Bookmark icon event
               // Bookmark icon event
            const bookmarkIcon = animeElementDetails.querySelector('#bookmark-icon .far');
            const watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
            
            // Check if show is already in watchlist
            if (watchlist.some(item => item.id === currentItem.id)) {
                bookmarkIcon.classList.replace('far', 'fas');
            } else {
                bookmarkIcon.classList.replace('fas', 'far');
            }

            bookmarkIcon.addEventListener('click', () => {
                const existingIndex = watchlist.findIndex(item => item.id === currentItem.id);
                if (existingIndex === -1) {
                    watchlist.push({
                        id: currentItem.id,
                        title: currentItem.name,
                        poster_path: currentItem.poster_path,
                        media_type: 'tv'
                    });
                    localStorage.setItem('watchlist', JSON.stringify(watchlist));
                    bookmarkIcon.classList.replace('far', 'fas');
                } else {
                    watchlist.splice(existingIndex, 1);
                    localStorage.setItem('watchlist', JSON.stringify(watchlist));
                    bookmarkIcon.classList.replace('fas', 'far');
                }
            });
        });

        container.appendChild(animeElement);
    });
}
 
 // Fetch and display highest-rated movies


function getHighestRatedMovies(url) {
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results);
        showHighestRatedMovies(data.results);
    });
}

function showHighestRatedMovies(data) {
    const container = document.getElementById('highest-rated-movies');
    container.innerHTML = '';

    data.forEach(movie => {
        const {title, name, poster_path, overview, release_date, first_air_date, vote_average } = movie;
        const movieElement = document.createElement('div');
        movieElement.classList.add('item');
        movieElement.innerHTML = `
            <img class="item" src="${IMG_URL}${poster_path}" alt="${title}">
           <!-- <div class="movie-info">
                <p class="movie-title">${title}</p>
            </div> -->
        `;
           // Add click event to navigate to movie-details.html with the movie ID in the URL
           
    movieElement.addEventListener('click', () => {
            const movieElementDetails = document.createElement('div');
            movieElementDetails.classList.add('item-details');
            movieElementDetails.innerHTML = ` 
            <div class="item-top-dashboard">
   <span  id="back-button" class="fas fa-arrow-left"></span>
   <span class="fas fa-film"></span>
   </div>
  <div class= "poster-details">
   <div class="item-poster">
  <img class="item-image" src="${IMG_URL}${poster_path}" alt="${title}">
  </div>
  <div class="item-poster-details">
  <div class="item-poster-detail">
   <p class="item-title">${title}</p>
     </div>
      <div class="item-poster-detail">
    <p>Aired:</p>
    <p class="release-date" > ${release_date || first_air_date}</p>
      </div>
       <div class="item-poster-detail">
  <p>IMDB:</p>
  
  <p class="rating"><span class="fas fa-star"></span>${vote_average}</p>
    </div>
   </div>
   </div>
   
  <div class="overview">
  <p>${overview}</p>
  <div class="item-details-gradient" ></div>
  <i class= fas fa-caret-down"></i>
  </div>
    <div id="bookmark-icon">
      <span class="far fa-bookmark"></span>
    </div>
            `;
            
            const bodyContent = document.getElementById('body-content');
            bodyContent.innerHTML = '';
            bodyContent.appendChild(movieElementDetails);
            document.getElementById('back-button').addEventListener('click', () => {
        goBackToHomePage(); // Return to the original search page
    });
    
       // Set current movie
       currentItem = movie;
    
   // Bookmark icon event
               // Bookmark icon event
            const bookmarkIcon = movieElementDetails.querySelector('#bookmark-icon .far');
            const watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
            
            // Check if show is already in watchlist
            if (watchlist.some(item => item.id === currentItem.id)) {
                bookmarkIcon.classList.replace('far', 'fas');
            } else {
                bookmarkIcon.classList.replace('fas', 'far');
            }

            bookmarkIcon.addEventListener('click', () => {
                const existingIndex = watchlist.findIndex(item => item.id === currentItem.id);
                if (existingIndex === -1) {
                    watchlist.push({
                        id: currentItem.id,
                        title: currentItem.name || currentItem.title,
                        poster_path: currentItem.poster_path,
                        media_type: 'movie'
                    });
                    localStorage.setItem('watchlist', JSON.stringify(watchlist));
                    bookmarkIcon.classList.replace('far', 'fas');
                } else {
                    watchlist.splice(existingIndex, 1);
                    localStorage.setItem('watchlist', JSON.stringify(watchlist));
                    bookmarkIcon.classList.replace('fas', 'far');
                }
            });
        });
    
        container.appendChild(movieElement);
    });
}

// Fetch and display highest-rated TV shows


function getHighestRatedShows(url) {
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results);
        showHighestRatedShows(data.results);
    });
}

function showHighestRatedShows(data) {
    const container = document.getElementById('highest-rated-shows');
    container.innerHTML = '';

    data.forEach(show => {
       const {title, name, poster_path, overview, release_date, first_air_date, vote_average } = show;
        const showElement = document.createElement('div');
        showElement.classList.add('item');
        showElement.innerHTML = `
            <img class="item" src="${IMG_URL}${poster_path}" alt="${name}">
         <!--   <div class="movie-info">
                <p class="movie-title">${title}</p>
            </div> -->
        `;
           // Add click event to navigate to movie-details.html with the movie ID in the URL
           
   showElement.addEventListener('click', () => {
            const showElementDetails = document.createElement('div');
            showElementDetails.classList.add('item-details');
            showElementDetails.innerHTML = ` 
 <div class="item-top-dashboard">
   <span  id="back-button" class="fas fa-arrow-left"></span>
   <span class="fas fa-film"></span>
   </div>
  <div class= "poster-details">
   <div class="item-poster">
  <img class="item-image" src="${IMG_URL}${poster_path}" alt="${name}">
  </div>
  <div class="item-poster-details">
  <div class="item-poster-detail">
   <p class="item-title">${name}</p>
     </div>
      <div class="item-poster-detail">
    <p>Aired:</p>
    <p class="release-date" > ${release_date || first_air_date}</p>
      </div>
       <div class="item-poster-detail">
  <p>IMDB:</p>
  
  <p class="rating"><span class="fas fa-star"></span>${vote_average}</p>
    </div>
   </div>
   </div>
   
  <div class="overview">
  <p>${overview}</p>
  <div class="item-details-gradient" ></div>
  <i class= fas fa-caret-down"></i>
  </div>
     <div id="bookmark-icon">
      <span class="far fa-bookmark"></span>
    </div>
 
            `;
            
            const bodyContent = document.getElementById('body-content');
            bodyContent.innerHTML = '';
            bodyContent.appendChild(showElementDetails); 
            document.getElementById('back-button').addEventListener('click', () => {
        goBackToHomePage(); // Return to the original search page
        history.pushState({ page: 'item-details', item: item.name }, '', '');
    });
    
       // Set current movie
       currentItem = show;
    
   // Bookmark icon event
               // Bookmark icon event
            const bookmarkIcon = showElementDetails.querySelector('#bookmark-icon .far');
            const watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
            
            // Check if show is already in watchlist
            if (watchlist.some(item => item.id === currentItem.id)) {
                bookmarkIcon.classList.replace('far', 'fas');
            } else {
                bookmarkIcon.classList.replace('fas', 'far');
            }

            bookmarkIcon.addEventListener('click', () => {
                const existingIndex = watchlist.findIndex(item => item.id === currentItem.id);
                if (existingIndex === -1) {
                    watchlist.push({
                        id: currentItem.id,
                        title: currentItem.name,
                        poster_path: currentItem.poster_path,
                        media_type: 'tv'
                    });
                    localStorage.setItem('watchlist', JSON.stringify(watchlist));
                    bookmarkIcon.classList.replace('far', 'fas');
                } else {
                    watchlist.splice(existingIndex, 1);
                    localStorage.setItem('watchlist', JSON.stringify(watchlist));
                    bookmarkIcon.classList.replace('fas', 'far');
                }
            });
        });
    
        container.appendChild(showElement);
    });
}

// Add event listener for expanding the overview when clicked
document.addEventListener('click', (event) => {
    const overviewElement = event.target.closest('.overview');
    
    if (overviewElement) {
        // Toggle the 'expanded' class to either expand or collapse the overview
        overviewElement.classList.toggle('expanded');
    }
});





function goBackToHomePage() {
    const bodyContent = document.getElementById('body-content');
    bodyContent.innerHTML = homeoriginalContent; // Restore original content
    initializeHomePage();
    getMainPosterWithCycle();
}




// Function to fetch popular movies and shows


// Call the function on page load





// Listen for popstate events (back/forward navigation)

/*window.addEventListener('popstate', (event) => {
    const backButtons = document.document.querySelectorAll('.fas.fa-arrow-left');
    
    backButtons.forEach(button => {
        button.addEventListener('click', () => {
            goBackToHomePage();  // Define this function to handle back navigation
        });
    });
});*/

/*window.addEventListener('popstate', (event) => {
    if (event.state && event.state.page === 'item-details') {

      goBackToHomePage();
    } 
      
   else {
        // If there's no specific state, restore the default home page
        goBackToHomePage();
    }
});*/

// Function to navigate to different pages and update the history state
//function navigateTo(page) {
  //history.pushState(null, '', page);  // Push new state into the history
//  loadPage(page);  // Load the new page content
//}

// Your loadPage function


// Call the navigateTo function when clicking a link
/*document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const page = e.target.getAttribute('href'); // Get the link href
    navigateTo(page);  // Navigate to the page
  });
});*/


 
 
 
 
 
 
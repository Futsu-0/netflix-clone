/*const DISCOVER_API_KEY = 'api_key=9068b1583036f1f026a92bc56c96058a';
const DISCOVER_BASE_URL = 'https://api.themoviedb.org/3';
const DISCOVER_IMG_URL = 'https://image.tmdb.org/t/p/w500';
const NETWORKS_API_KEY = '9068b1583036f1f026a92bc56c96058a';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const NETWORKS_API_URL = `${BASE_URL}/network/`;
const DISCOVER_API_URL = `${BASE_URL}/discover/tv?api_key=${NETWORKS_API_KEY}&with_networks=`;

// Movies URLs for 60 movies (3 pages)
const MOVIES_API_URL_PAGE_1 = `${DISCOVER_BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&${DISCOVER_API_KEY}`;
const MOVIES_API_URL_PAGE_2 = `${DISCOVER_BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc&${DISCOVER_API_KEY}`;
const MOVIES_API_URL_PAGE_3 = `${DISCOVER_BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=3&sort_by=popularity.desc&${DISCOVER_API_KEY}`;

// TV Shows URLs for 60 shows (3 pages)
const TVSHOWS_API_URL_PAGE_1 = `${DISCOVER_BASE_URL}/discover/tv?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&${DISCOVER_API_KEY}`;
const TVSHOWS_API_URL_PAGE_2 = `${DISCOVER_BASE_URL}/discover/tv?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc&${DISCOVER_API_KEY}`;
const TVSHOWS_API_URL_PAGE_3 = `${DISCOVER_BASE_URL}/discover/tv?include_adult=false&include_video=false&language=en-US&page=3&sort_by=popularity.desc&${DISCOVER_API_KEY}`;

// Anime URLs
const ANIME_API_URL_PAGE_1 = `${DISCOVER_BASE_URL}/discover/tv?with_genres=16&language=en-US&page=1&sort_by=popularity.desc&${DISCOVER_API_KEY}`;
const ANIME_API_URL_PAGE_2 = `${DISCOVER_BASE_URL}/discover/tv?with_genres=16&language=en-US&page=2&sort_by=popularity.desc&${DISCOVER_API_KEY}`;
const ANIME_API_URL_PAGE_3 = `${DISCOVER_BASE_URL}/discover/tv?with_genres=16&language=en-US&page=3&sort_by=popularity.desc&${DISCOVER_API_KEY}`;
const SEARCH_API = `${DISCOVER_BASE_URL}/search/multi?${DISCOVER_API_KEY}&query=`;*/

document.addEventListener("DOMContentLoaded", () => {
    initializeSearchFunctionality();
    displayNetworkLogos(); // Display logos on page load
});

// Store the original HTML of the discover content
originalContent = `
    <div class="discover">
        <h1>Discover</h1>
        <div class="search-container" id="searchContainer">
            <span class="fas fa-search"></span>
            <input type="search" id="searchInput" placeholder="What do you want to watch?">
        </div>
        <div id="logos-content" class="discover-content">
            <div id="logos-container" class="logos-container"></div>
        </div>
    </div>
`;







// Initialize search functionality
function initializeSearchFunctionality() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) {
        console.error('Search input element not found');
        return;
    }

    // Add event listener for 'Enter' key
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch(searchInput.value); // Perform search on Enter
        }
    });
}

// Perform search based on the query
function performSearch(query) {
    if (query.trim() === '') return;

    const encodedQuery = encodeURIComponent(query);
    const searchUrl = `${SEARCH_API}${encodedQuery}`;

    fetch(searchUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data.results);
            displaySearchResults(data.results, query);
            // Push the current state into the history
      /*  history.pushState({ page: 'searchResults', query: query }, '', '');*/
        })
        .catch(error => console.error('Error performing search:', error));
}

// Display search results in the content area
function displaySearchResults(results, query) {
    const bodyContent = document.getElementById('discover-content');
    bodyContent.innerHTML = ''; // Clear previous content

    // Create the search bar
    const searchBar = document.createElement('div');
    searchBar.className = 'search-bar-container';
    searchBar.innerHTML = `
        <span id="backButton" class="fas fa-arrow-left"></span>
        <input type="search" id="searchInputResults" placeholder="Search..." value="${query}">
    `;

    bodyContent.appendChild(searchBar); // Add search bar to the content

    const resultsContainer = document.createElement('div');
    resultsContainer.className = 'search-results';
    

    results.forEach(item => {
        if (item.media_type === 'movie' || item.media_type === 'tv') {
            const itemElement = document.createElement('div');
            itemElement.className = 'search-item';

  const  posterPath = item.poster_path 
                ? `${DISCOVER_IMG_URL}${item.poster_path}`
                : 'Thumbnails/placeholder-image.webp';  // Placeholder image

            itemElement.innerHTML = `
                <img src="${posterPath}" alt="${item.title || item.name}">
         <h3 class="search-item-title">${item.title || item.name}</h3>`;
         
      // Add click event to navigate to movie-details.html with the movie ID in the URL
    itemElement.addEventListener('click', () => {
    	
            const itemElementDetails = document.createElement('div');
            itemElementDetails.classList.add('item-details');
            itemElementDetails.innerHTML = ` 
              <div class="item-top-dashboard">
   <span  id="back-button" class="fas fa-arrow-left"></span>
   <span class="fas fa-film"></span>
   </div>
  <div class= "poster-details">
   <div class="item-poster">
  <img class="item-image" src="${IMG_URL}${item.poster_path}" alt="${item.title || item.name}">
  </div>
  <div class="item-poster-details">
  <div class="item-poster-detail">
   <p class="item-title">${item.title || item.name}</p>
     </div>
      <div class="item-poster-detail">
    <p>Aired:</p>
    <p class="release-date" > ${item.release_date || item.first_air_date}</p>
      </div>
       <div class="item-poster-detail">
  <p>IMDB:</p>
  
  <p class="rating"><span class="fas fa-star"></span>${item.vote_average}</p>
    </div>
   </div>
   </div>
   
  <div class="overview">
  <p>${item.overview}</p>
  <div class="item-details-gradient" ></div>
  <i class= fas fa-caret-down"></i>
  </div>
  
   <div id="bookmark-icon">
                    <span class="far fa-bookmark"></span>
                </div>
            `;
            
           
         bodyContent.innerHTML = '';
         bodyContent.appendChild(itemElementDetails);  
         
         document.getElementById('back-button').addEventListener('click', () => {
        goBackToSearchPage(); // Return to the original search page
    });
    
       // Set current movie
       currentItem = item;
       
       if (item.media_type === 'movie' || item.media_type === 'tv'){
    
   // Bookmark icon event
               // Bookmark icon event
            const bookmarkIcon = itemElement.querySelector('#bookmark-icon .far');
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
                        media_type: item.media_type
                    });
                    localStorage.setItem('watchlist', JSON.stringify(watchlist));
                    bookmarkIcon.classList.replace('far', 'fas');
                } else {
                    watchlist.splice(existingIndex, 1);
                    localStorage.setItem('watchlist', JSON.stringify(watchlist));
                    bookmarkIcon.classList.replace('fas', 'far');
                }
            });
       }
        });

            resultsContainer.appendChild(itemElement);
        }
    });

    // Add back button functionality
    document.getElementById('backButton').addEventListener('click', () => {
        goBackToSearchPage(); // Call the function to go back
    });

    // Add event listener to the new search input
    const searchInputResults = document.getElementById('searchInputResults');
    searchInputResults.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch(searchInputResults.value); // Perform a new search
        }
    });

    bodyContent.appendChild(resultsContainer); // Append results container to body
    
}

// Function to restore the original search page
function goBackToSearchPage() {
    const bodyContent = document.getElementById('discover-content');
    bodyContent.innerHTML = originalContent; // Restore original content
    initializeSearchFunctionality(); // Reinitialize search functionality
    displayNetworkLogos(); // Re-display logos
}

// Define networks for displaying logos
networks = [
    { id: 213, name: 'Netflix' },
    { id: 49, name: 'HBO' },
    { id: 1024, name: 'Prime Video' },
    { id: 2552, name: 'Apple TV+' },
    { id: 2739, name: 'Disney+' },
    
    { id: 453, name: 'Hulu' },
    
    
    { id: 67, name: 'Showtime' },
    { id: 88, name: 'FX' },
    { id: 56, name: 'Cartoon Network' },
    { id: 13, name: 'Nickelodeon' },
    
   
];

// Function to display network logos
function displayNetworkLogos() {
    const container = document.getElementById('logos-container');
    if (!container) {
        console.error('logos-container element not found');
        return;  // Exit if the container is not found
    }

    container.innerHTML = ''; // Clear existing logos

    networks.forEach(network => {
        fetch(`${NETWORKS_API_URL}${network.id}?api_key=${NETWORKS_API_KEY}`)
            .then(response => response.json())
            .then(data => {
                const logoPath = `${IMG_URL}${data.logo_path}`;
                const networkElement = document.createElement('div');
                networkElement.classList.add('network-item');

                networkElement.innerHTML = `
                    <img src="${logoPath}" alt="${network.name}">
                `;
                
                // Event listener to fetch shows when a network is clicked
    networkElement.addEventListener('click', () => {
        container.style.display = 'none'; // Hide logos
          fetchNetworkShows(network.id, network.name); // Fetch and display shows
   /*history.pushState({ page: 'network-search-results', network: network.name }, '', '');  // Push state for network shows*/
                });
                

                container.appendChild(networkElement); // Append to logos container
            })
            .catch(error => console.error('Error fetching network logo:', error));
    });
}

// Function to fetch shows based on the selected network
function fetchNetworkShows(networkId, networkName) {
    // Store the current network information
    currentNetworkId = networkId;
    currentNetworkName = networkName;

    const container = document.getElementById('discover-content');
    container.innerHTML = `
        <span id="back-button" class="fas fa-arrow-left"></span>
        <h2 class="network-name">${networkName} Shows</h2>
    `;

    const networkresultsContainer = document.createElement('div');
    networkresultsContainer.className = 'network-search-results';
    container.appendChild(networkresultsContainer);

    const fetchPage = (page) => {
        return fetch(`${DISCOVER_API_URL}${networkId}&page=${page}`)
            .then(response => response.json())
            .then(data => data.results);
    };

    Promise.all([fetchPage(1), fetchPage(2), fetchPage(3)])
        .then(results => {
            const shows = results.flat();
            shows.forEach(show => {
                const showElement = document.createElement('div');
                showElement.classList.add('show-item');

                const posterPath = show.poster_path 
                    ? `${IMG_URL}${show.poster_path}`
                    : 'Thumbnails/placeholder-image.webp';

                showElement.innerHTML = `
                    <img src="${posterPath}" alt="${show.name}">
                    <h3 class="network-item-title">${show.name}</h3>
                `;
                
                showElement.addEventListener('click', () => displayShowDetails(show));

                networkresultsContainer.appendChild(showElement);
            });
        })
        .catch(error => console.error('Error fetching shows:', error));

    document.getElementById('back-button').addEventListener('click', () => {
        goBackToSearchPage();
    });
}

// Function to display show details
function displayShowDetails(show) {
    const container = document.getElementById('discover-content');
    const showElementDetails = document.createElement('div');
    showElementDetails.classList.add('item-details');
    showElementDetails.innerHTML = `
        <div class="item-top-dashboard">
            <span id="back-button" class="fas fa-arrow-left"></span>
            <span class="fas fa-film"></span>
        </div>
        <div class="poster-details">
            <div class="item-poster">
                <img class="item-image" src="${IMG_URL}${show.poster_path}" alt="${show.name}">
            </div>
            <div class="item-poster-details">
                <div class="item-poster-detail">
                    <p class="item-title">${show.name}</p>
                </div>
                <div class="item-poster-detail">
                    <p>Aired:</p>
                    <p class="release-date">${show.first_air_date || 'N/A'}</p>
                </div>
                <div class="item-poster-detail">
                    <p>IMDB:</p>
                    <p class="rating"><span class="fas fa-star"></span>${show.vote_average}</p>
                </div>
            </div>
        </div>
        <div class="overview">
            <p>${show.overview}</p>
            <div class="item-details-gradient"></div>
        </div>
        <div id="bookmark-icon">
            <span class="far fa-bookmark"></span>
        </div>
    `;

    container.innerHTML = '';
    container.appendChild(showElementDetails);

    // Update back button functionality
    document.getElementById('back-button').addEventListener('click', () => {
        fetchNetworkShows(currentNetworkId, currentNetworkName); // Use stored network information
    });

    // Bookmark icon functionality
    const bookmarkIcon = showElementDetails.querySelector('#bookmark-icon .far');
    const watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];

    // Check if show is already in watchlist
    if (watchlist.some(item => item.id === show.id)) {
        bookmarkIcon.classList.replace('far', 'fas');
    }

    bookmarkIcon.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent triggering show details
        const existingIndex = watchlist.findIndex(item => item.id === show.id);
        if (existingIndex === -1) {
            watchlist.push({
                id: show.id,
                title: show.name,
                poster_path: show.poster_path,
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
}

// Listen for the popstate event to handle back navigation
/*window.addEventListener('popstate', (event) => {
    if (event.state && event.state.page === 'searchResults') {
        // Go back to search results with the query stored in history
      //  performSearch(event.state.query);
        goBackToSearchPage();
    } else if (event.state && event.state.page === 'network-search-results') {
        // Go back to network shows with network ID stored in history
      //  fetchNetworkShows(event.state.networkId, event.state.network);
      goBackToSearchPage();
    } else {
        // If no specific state, go back to the original discover page
        goBackToSearchPage();
    }
});*/



// Existing constants remain the same

/*document.addEventListener("DOMContentLoaded", initializeSearchPage);

function initializeSearchPage() {
    console.log('Search page initialized');
    setupEventListeners();
    // Load Movies by default on page load
    activateButton('moviesButton');
    getDiscoverContent([MOVIES_API_URL_PAGE_1, MOVIES_API_URL_PAGE_2, MOVIES_API_URL_PAGE_3]);
}

function setupEventListeners() {
    const moviesButton = document.getElementById('moviesButton');
    const tvShowsButton = document.getElementById('tvShowsButton');
    const animeButton = document.getElementById('animeButton');

    if (moviesButton) {
        moviesButton.addEventListener('click', () => {
            activateButton('moviesButton');
            getDiscoverContent([MOVIES_API_URL_PAGE_1, MOVIES_API_URL_PAGE_2, MOVIES_API_URL_PAGE_3]);
        });
    }

    if (tvShowsButton) {
        tvShowsButton.addEventListener('click', () => {
            activateButton('tvShowsButton');
            getDiscoverContent([TVSHOWS_API_URL_PAGE_1, TVSHOWS_API_URL_PAGE_2, TVSHOWS_API_URL_PAGE_3]);
        });
    }

    if (animeButton) {
        animeButton.addEventListener('click', () => {
            activateButton('animeButton');
            getDiscoverContent([ANIME_API_URL_PAGE_1, ANIME_API_URL_PAGE_2, ANIME_API_URL_PAGE_3]);
        });
    }
}


function getDiscoverContent(urls) {
    Promise.all(urls.map(url => fetch(url).then(response => response.json())))
        .then(results => {
            const allItems = results.flatMap(result => result.results);
            showDiscoverContent(allItems);
        })
        .catch(error => console.error('Error fetching content:', error));
}

function showDiscoverContent(data) {
    const grid = document.getElementById('discoverGrid');
   if (!grid) {
        console.error('Discover grid element not found');
        return;
    }

    grid.innerHTML = ''; // Clear the grid

    data.forEach(item => {
        const { title, name, poster_path } = item;
        const displayTitle = title || name; // Use title for movies, name for TV shows
        const contentElement = document.createElement('div');
        contentElement.classList.add('movie-item');
        contentElement.innerHTML = `
            <img src="${DISCOVER_IMG_URL}${poster_path}" alt="${displayTitle}">
        `;
        grid.appendChild(contentElement);
    });
}

function activateButton(buttonId) {
    const buttons = document.querySelectorAll('.category');
    buttons.forEach(button => button.classList.remove('active'));

    const buttonElement = document.getElementById(buttonId);
    if (buttonElement) {
        buttonElement.classList.add('active');
    } else {
        console.error(`Button with ID "${buttonId}" not found.`);
    }
}*/
/*const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const API_KEY = 'api_key=9068b1583036f1f026a92bc56c96058a';*/

watchlistoriginalContent = `
    <div id="watchlist-body">
        <h1>Watchlist</h1>
        <div id="watchlist-grid"></div>
    </div>
`;

function displayWatchlist() {
    const watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
    const watchlistContainer = document.getElementById('watchlist-grid');
    watchlistContainer.innerHTML = ''; // Clear the container first

    if (watchlist.length === 0) {
        watchlistContainer.innerHTML = '<p class="watchlist-message">Your watchlist is empty!</p>';
        return;
    }

    watchlist.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('movie-item');
        itemElement.innerHTML = `
            <img src="${IMG_URL}${item.poster_path}" alt="${item.title || item.name}">
            <p>${item.title || item.name}</p>
        `;
        addClickEvent(itemElement, item);
        watchlistContainer.appendChild(itemElement);
    });

    // Attach event listener to each overview when watchlist is rendered
    attachOverviewEvent();
}

function addClickEvent(element, itemData) {
    element.addEventListener('click', () => {
        // Fetch full details for the item
        const detailsUrl = `${BASE_URL}/${itemData.media_type}/${itemData.id}?${API_KEY}`;
        
        fetch(detailsUrl)
            .then(response => response.json())
            .then(fullItemData => {
                const itemDetails = document.createElement('div');
                itemDetails.classList.add('item-details');
                itemDetails.innerHTML = `
                    <div class="item-top-dashboard">
                        <span id="back-button" class="fas fa-arrow-left"></span>
                        <span class="fas fa-film"></span>
                    </div>
                    <div class="poster-details">
                        <div class="item-poster">
                            <img class="item-image" src="${IMG_URL}${fullItemData.poster_path}" alt="${fullItemData.title || fullItemData.name}">
                        </div>
                        <div class="item-poster-details">
                            <div class="item-poster-detail">
                                <p class="item-title">${fullItemData.title || fullItemData.name}</p>
                            </div>
                            <div class="item-poster-detail">
                                <p>Aired:</p>
                                <p class="release-date">${fullItemData.release_date || fullItemData.first_air_date}</p>
                            </div>
                            <div class="item-poster-detail">
                                <p>IMDB:</p>
                                <p class="rating"><span class="fas fa-star"></span>${fullItemData.vote_average}</p>
                            </div>
                        </div>
                    </div>
                    <div class="overview">
                        <p>${fullItemData.overview}</p>
                        <div class="item-details-gradient"></div>
   <!-- <i class="fas fa-caret-down"></i> -->
                    </div>
                    <div id="bookmark-icon">
                        <span class="fas fa-bookmark"></span>
                    </div>
                `;

                const bodyContent = document.getElementById('watchlist-body');
                bodyContent.innerHTML = '';
                bodyContent.appendChild(itemDetails);

                document.getElementById('back-button').addEventListener('click', () => {
                    goBackToWatchlistPage();
                });

                const bookmarkIcon = itemDetails.querySelector('#bookmark-icon .fas');
                bookmarkIcon.addEventListener('click', () => {
                    const watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
                    const updatedWatchlist = watchlist.filter(item => item.id !== itemData.id);
                    localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
                    goBackToWatchlistPage();
                });

            })
            .catch(error => {
                console.error('Error fetching item details:', error);
                goBackToWatchlistPage();
            });
    });
}

function goBackToWatchlistPage() {
    const bodyContent = document.getElementById('watchlist-body');
    bodyContent.innerHTML = watchlistoriginalContent;
    displayWatchlist();
}

// Function to attach event listeners for expanding overview
function attachOverviewEvent() {
    document.querySelectorAll('.overview').forEach(overviewElement => {
        overviewElement.addEventListener('click', () => {
            overviewElement.classList.toggle('expanded');
        });
    });
}

// Call this function when loading the watchlist page
document.addEventListener('DOMContentLoaded', displayWatchlist);
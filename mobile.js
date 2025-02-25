// Function to toggle hidden companies
function toggleCompanies() {
    const hiddenCompanies = document.querySelectorAll('.company.hidden');
    const button = document.querySelector('.toggle-button');

    // Toggle the 'hidden' class for each hidden company
    hiddenCompanies.forEach(company => company.classList.toggle('hidden'));

    // Toggle the button text
    button.textContent = button.textContent === 'Show More' ? 'Show Less' : 'Show More';
}

// Function to handle search
function searchPhones() {
    const searchTerm = document.querySelector('.search-bar input').value.toLowerCase();
    const phones = document.querySelectorAll('.phone');
    const noResultsMessage = document.querySelector('#no-results-message'); // Error message element

    let matchFound = false; // Flag to check if any phone matches

    phones.forEach(phone => {
        const phoneName = phone.querySelector('h3').textContent.toLowerCase();
        const phoneFeatures = phone.querySelector('p').textContent.toLowerCase();
        
        // Show or hide the phone based on search term match
        if (phoneName.includes(searchTerm) || phoneFeatures.includes(searchTerm)) {
            phone.style.display = 'block';
            matchFound = true;
        } else {
            phone.style.display = 'none';
        }
    });

    // Display or hide the error message based on search results
    if (!matchFound && searchTerm) {
        if (!noResultsMessage) {
            const message = document.createElement('p');
            message.id = 'no-results-message';
            message.style.color = 'red';
            message.textContent = 'No results found for your search.';
            document.querySelector('.search-bar').appendChild(message);
        }
    } else if (matchFound && noResultsMessage) {
        noResultsMessage.remove(); // Remove the error message if matches are found
    }
}

// Add event listeners when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.querySelector('.search-bar button');
    const compareButton = document.querySelector('.comparison-tool button');
    const toggleButton = document.querySelector('.toggle-button');
    const searchInput = document.querySelector('.search-bar input');

    // Add event listener to the search button
    searchButton.addEventListener('click', searchPhones);

    // Add event listener for Enter key press on search input
    searchInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            searchPhones();
        }
    });

    // Add event listener to the comparison button
    compareButton.addEventListener('click', comparePhones);

    // Add event listener to the Show More/Show Less button
    toggleButton.addEventListener('click', toggleCompanies);
});

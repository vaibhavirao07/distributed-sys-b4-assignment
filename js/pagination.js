//let currentPage = 1; // Start on page 1
const totalPages = 3; // Total number of pages

// Update the page number display
function updatePageDisplay() {
    document.getElementById('current-page').textContent = currentPage;
}

// Move to the next page
function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        loadPage(currentPage);  // Load the next page
    }
}

// Move to the previous page
function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        loadPage(currentPage);  // Load the previous page
    }
}

// Load the respective page based on the page number
function loadPage(page) {
    switch (page) {
        case 1:
            window.location.href = 'b4indexv1.html'; // First page
            break;
        case 2:
            window.location.href = 'page2.html'; // Second page
            break;
        case 3:
            window.location.href = 'page3.html'; // Third page
            break;
        default:
            window.location.href = 'b4indexv1.html'; // Fallback to first page
    }
}

// On page load, update the page number display
window.onload = updatePageDisplay;

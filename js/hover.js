// Function to load the content dynamically based on the page/courses category selected
function loadContent(page) {
    const mainContent = document.querySelector('main');

    // Course categories with corresponding courses
    const courses = {
        ai: `
            <h2 class="hover-effect">AI Related Courses</h2>
            <ul class="course-list">
                <li class="hover-effect">Artificial Intelligence</li>
                <li class="hover-effect">Data Mining</li>
                <li class="hover-effect">Deep Learning</li>
                <li class="hover-effect">Information Retrieval</li>
                <li class="hover-effect">Machine Learning</li>
                <li class="hover-effect">Natural Language Processing</li>
                <li class="hover-effect">Semantic Web</li>
            </ul>
        `,
        system: `
            <h2 class="hover-effect">System Related Courses</h2>
            <ul class="course-list">
                <li class="hover-effect">Big Data</li>
                <li class="hover-effect">Cloud Computing</li>
                <li class="hover-effect">Computer Architecture</li>
                <li class="hover-effect">Computer Networks</li>
                <li class="hover-effect">Distributed Systems</li>
                <li class="hover-effect">Internet Architecture and Protocols</li>
                <li class="hover-effect">Operating Systems</li>
            </ul>
        `,
        theory: `
            <h2 class="hover-effect">Theory Related Courses</h2>
            <ul class="course-list">
                <li class="hover-effect">Compilers</li>
                <li class="hover-effect">Computer Security</li>
                <li class="hover-effect">Data Structures and Computer Algorithms</li>
                <li class="hover-effect">Discrete Structures</li>
                <li class="hover-effect">Network Science</li>
                <li class="hover-effect">Programming Languages</li>
            </ul>
        `,
        application: `
            <h2 class="hover-effect">Application Related Courses</h2>
            <ul class="course-list">
                <li class="hover-effect">Computer Graphics</li>
                <li class="hover-effect">Database Systems</li>
                <li class="hover-effect">Interactive Multimedia & Game Programming</li>
                <li class="hover-effect">Visualization</li>
                <li class="hover-effect"><a href="#web" class="hover-effect">Web Programming</a></li>
            </ul>
        `,
        hardware: `
            <h2 class="hover-effect">Hardware Related Courses</h2>
            <ul class="course-list">
                <li class="hover-effect">Computer-Aided Design</li>
                <li class="hover-effect">SoC Verification</li>
            </ul>
        `,
        other: `
            <h2 class="hover-effect">Other Courses</h2>
            <ul class="course-list">
                <li class="hover-effect">Analytics Process</li>
                <li class="hover-effect">Capstone Project</li>
                <li class="hover-effect">Biography</li>
            </ul>
        `,
        web: `
            <h2 class="hover-effect">Web Programming</h2>
            <p>This is the Web Programming subpage content.</p>
        `,
        home: `
            <img src="images/another-profile.jpg" alt="Another Profile Picture" class="professor-img hover-effect">
            <h2 class="hover-effect">Welcome to My Homepage</h2>
            <p>Hello! I am Dr. Jonathan Keller, a professor at San Jose State University in the Computer Science Department.</p>
            <h3 class="hover-effect">Course List</h3>
            <ul class="course-list">
                <li class="hover-effect">Introduction to Programming</li>
                <li class="hover-effect">Data Structures</li>
                <li class="hover-effect">Algorithms</li>
                <li class="hover-effect"><a href="#web" class="hover-effect">Web Programming</a></li>
                <li class="hover-effect">Natural Language Processing</li>
            </ul>
        `
    };

    // Load the relevant content based on the selected page/category
    mainContent.innerHTML = courses[page] || courses['home'];

    // Reapply hover effect to the new content after loading
    addHoverEffect();
}

// Function to apply hover effect only to specific elements (e.g., h2, li, and a)
function addHoverEffect() {
    // Select only elements that should have the hover effect, excluding the first h2 (which is "Welcome to My Homepage")
    const hoverElements = document.querySelectorAll('h2.hover-effect:not(:first-child), li.hover-effect, a.hover-effect');

    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.fontSize = '0.2em'; // Increase font size on hover
            element.style.transition = 'font-size 0.3s ease'; // Smooth transition for font size
        });
        element.addEventListener('mouseleave', () => {
            element.style.fontSize = ''; // Reset font size on mouse leave
        });
    });
}

// Function to handle hash change for dynamic content loading
function handleHashChange() {
    const hash = window.location.hash.replace('#', '');

    loadContent(hash || 'home'); // Load the relevant content or default to home
}

// Handle the initial page load and subsequent hash changes
document.addEventListener('DOMContentLoaded', () => {
    handleHashChange(); // Load initial content based on the hash
    window.addEventListener('hashchange', handleHashChange); // Listen for hash changes

    // Attach hover effect to initial content
    addHoverEffect();
});

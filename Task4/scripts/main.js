document.addEventListener('DOMContentLoaded', () => {
    // Sample data
    const contentData = [
        { id: 1, title: 'Manamey', image: 'images/Poster1.jpg', description: 'Movie2', category: 'trending' },
        { id: 2, title: 'Satya Bhama', image: 'images/Poster2.jpg', description: 'Description of Movie 2', category: 'recommended' },
        { id: 3, title: 'Bajyae Vaayu Vegam', image: 'images/Poster3.jpg', description: 'Description of Movie 2', category: 'recommended' },
        { id: 4, title: 'Kings Of Godavari', image: 'images/Poster4.jpg', description: 'Description of Series 1', category: 'trending' },
        { id: 5, title: 'Gam Gam Ganesha', image: 'images/Poster5.jpg', description: 'Description of Series 2', category: 'recommended' },
        { id: 6, title: 'Miral', image: 'images/Poster6.jpg', description: 'Description of Series 1', category: 'trending' },
        { id: 7, title: 'Ratnam', image: 'images/Poster7.jpg', description: 'Description of Series 1', category: 'trending' },
        { id: 8, title: 'Thimmarusu', image: 'images/Poster8.jpg', description: 'Description of Series 1', category: 'trending' },
        { id: 9, title: 'Raju Yadav', image: 'images/Poster9.jpg', description: 'Description of Series 1', category: 'trending' },
        { id: 10, title: 'Love Me', image: 'images/Poster10.jpg', description: 'Description of Series 1', category: 'trending' },
        { id: 11, title: 'Praveen IPS', image: 'images/Poster11.jpg', description: 'Description of Series 1', category: 'trending' },
        { id: 12, title: 'Kaliyugam Pattanamlo', image: 'images/Poster12.jpg', description: 'Description of Series 1', category: 'trending' },
        { id: 13, title: 'Yuva', image: 'images/Poster13.jpg', description: 'Description of Series 1', category: 'recommended'},
        { id: 14, title: 'Prathinidhi 2', image: 'images/Poster14.jpg', description: 'Description of Series 1', category: 'recommended' },
        { id: 15, title: 'Krishnamma', image: 'images/Poster15.jpg', description: 'Description of Series 1', category: 'recommended' },
        { id: 16, title: 'Prasanna Vadanam', image: 'images/Poster16.jpg', description: 'Description of Series 1', category: 'recommended' },
        { id: 17, title: 'Aa Okkati Adakku', image: 'images/Poster17.jpg', description: 'Description of Series 1', category: 'recommended' },
        { id: 18, title: 'The Family Star', image: 'images/Poster18.jpg', description: 'Description of Series 1', category: 'recommended' },
        // Add more data as needed
    ];

    // Function to display content
    const displayContent = (content, containerId) => {
        const container = document.getElementById(containerId);
        container.innerHTML = '';
        content.forEach(item => {
            const contentItem = document.createElement('div');
            contentItem.classList.add('content-item');
            contentItem.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <h3>${item.title}</h3>
            `;
            contentItem.addEventListener('click', () => {
                window.location.href = `content.html?id=${item.id}`;
            });
            container.appendChild(contentItem);
        });
    };

    // Function to filter and display content based on category
    const filterContent = (category) => {
        return contentData.filter(item => item.category === category);
    };

    // Display trending and recommended content on homepage
    displayContent(filterContent('trending'), 'trendingContent');
    displayContent(filterContent('recommended'), 'recommendedContent');

    // Search functionality
    const searchBar = document.getElementById('searchBar');
    searchBar.addEventListener('input', (e) => {
        const searchQuery = e.target.value.toLowerCase();
        const filteredContent = contentData.filter(item => item.title.toLowerCase().includes(searchQuery));
        displayContent(filteredContent, 'trendingContent');
    });

    // Content details page
    if (window.location.pathname.includes('content.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const contentId = parseInt(urlParams.get('id'));
        const contentItem = contentData.find(item => item.id === contentId);
        if (contentItem) {
            const contentDetails = document.getElementById('contentDetails');
            contentDetails.innerHTML = `
                <h2>${contentItem.title}</h2>
                <img src="${contentItem.image}" alt="${contentItem.title}">
                <p>${contentItem.description}</p>
            `;
        }
    }
});

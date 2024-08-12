document.addEventListener('DOMContentLoaded', function() {
    const blogList = document.getElementById('Imple');
    fetch('posts.json')
        .then(response => response.json())
        .then(posts => {
            posts.forEach(post => {
                const postElement = document.createElement('div');
                postElement.classList.add('blank');

                // Construct the inner HTML for the post
                postElement.innerHTML = `
                    <h2>${post.title}</h2>
                    <p>${post.content}</p>`;
                    blogList.appendChild(postElement);
            });
        })
        .catch(error => console.error('Error loading blog posts:', error));
});

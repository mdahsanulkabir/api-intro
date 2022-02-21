function loadPost(){
    fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data))
}

function displayPosts(posts){
    const postContainer = document.getElementById('posts');
    for (const post of posts){
        const div = document.createElement('div');
        div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        `;
        div.classList.add('post');
        postContainer.appendChild(div);
    }
        
}

loadPost();
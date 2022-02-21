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

function addAPost(){
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'My new post',
            body: 'This is my post',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then(res => res.json())
    .then(data => console.log(data));
}
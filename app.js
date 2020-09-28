let page = 1;

//Toda função com async retorna uma promise que encapsula os dados
const getPosts = async () => {
    const response = await fetch(`http://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`)
    return response.json();
}

//Await só pode ser usado em uma função async
const addPostsIntoDOM = async () => {
    const posts = await getPosts();
    const postsTemplate = posts.map(({id, title, body}) => `
    <div class="post">
       <div class="number">${id}</div>
            <div class="post-info">
              <h2 class="post-title">${title}</h2>
            <p class="post-body">${body}</p>
            </div>
    </div>`)
    console.log(postsTemplate);
}

addPostsIntoDOM();


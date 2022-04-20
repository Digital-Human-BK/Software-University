function attachEvents() {
    document.getElementById('btnLoadPosts').addEventListener('click', getAllPosts);
    const viewBtn = document.getElementById('btnViewPost');
    viewBtn.disabled = true;
    viewBtn.addEventListener('click', displayPost);
}
attachEvents();

async function displayPost() {
    const titleEl = document.getElementById('post-title');
    const postBodyEl = document.getElementById('post-body');
    const commentsUl = document.getElementById('post-comments');
    const selectedId = document.getElementById('posts').value;
    console.log(selectedId);

    titleEl.textContent = 'Loading Content...';
    postBodyEl.textContent = '';
    commentsUl.replaceChildren();


    const [post, comments] = await Promise.all([
        getPostById(selectedId),
        getCommentsByPostId(selectedId)
    ]);
    console.log(post, comments);
    titleEl.textContent = post.title;
    postBodyEl.textContent = post.body;

    comments.forEach(c => {
        const li = document.createElement('li');
        li.textContent = c.text;
        commentsUl.appendChild(li);
    })
}

async function getAllPosts() {
    const url = 'http://localhost:3030/jsonstore/blog/posts';

    try {
        const res = await fetch(url);

        if (res.status != 200) {
            throw new Error(`${res.status} ${res.statusText}`);
        }

        const data = await res.json();

        const selectElement = document.getElementById('posts');
        selectElement.replaceChildren();

        Object.values(data).forEach(p => {
            const optionEl = document.createElement('option');
            optionEl.textContent = p.title;
            optionEl.value = p.id;

            selectElement.appendChild(optionEl);
        });

        document.getElementById('btnViewPost').disabled = false;
    } catch (error) {
        alert(error.message);
    }

}

async function getPostById(postId) {
    const url = 'http://localhost:3030/jsonstore/blog/posts/' + postId;

    const res = await fetch(url);
    return await res.json();
}

async function getCommentsByPostId(postId) {
    const url = 'http://localhost:3030/jsonstore/blog/comments';
    try {
        const res = await fetch(url);

        if(res.status != 200) {
            throw new Error(`Can't load comments`);
        }

        const data = await res.json();
        console.log(data);

        return Object.values(data).filter(c => c.postId == postId);
    } catch (error) {
        alert(error.message);
        document.querySelector('body h2').textContent = '';
    }    
}
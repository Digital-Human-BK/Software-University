function loadCommits() {
    const username = document.getElementById('username').value;
    const repoName = document.getElementById('repo').value;
    const commitsUl = document.getElementById('commits');
    const url = `https://api.github.com/repos/${username}/${repoName}/commits`;

    async function getData(){
        try {
            const response = await fetch(url);
            if (response.ok === false) {
                throw new Error(`${response.status}`);
            }

            const data = await response.json();
            handleResponse(data);
        }  catch (error) {
            handleError(error);
        }
    }
    getData()
    
    // fetch(url)
    //     .then(response => {
    //         if (response.ok === false) {
    //             throw new Error(`${response.status}`);
    //         }
    //         return response.json();
    //     })
    //     .then(handleResponse)
    //     .catch(handleError);

    function handleResponse(data) {
        commitsUl.textContent = '';

        for (const c of data) {
            const li = document.createElement('li');
            li.textContent = `${c.commit.author.name}: ${c.commit.message}`;

            commitsUl.appendChild(li);
        }
    }

    function handleError(error){
        commitsUl.textContent = '';
        const li = document.createElement('li');
		li.textContent = `Error: ${error.message} (Not Found)`;
        commitsUl.appendChild(li);
    }
}
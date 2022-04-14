function loadRepos() {
	const repos = document.getElementById('repos');
	const user = document.getElementById('username').value;
	const url = `https://api.github.com/users/${user}/repos`;

	fetch(url)
		.then(res => {
			if (res.ok == false) {
				throw new Error(`${res.status} ${res.statusText}`);
			}
			return res.json()
		})
		.then(handleResponce)
		.catch(handleError);

	function handleResponce(data) {
		repos.textContent = '';

		for (let repo of data) {
			const liElement = document.createElement('li');
			const a = document.createElement('a');
			a.href = repo.html_url;
			a.textContent = repo.full_name;
			liElement.appendChild(a);
			repos.appendChild(liElement);
		}
	}

	function handleError(error) {
		repos.replaceChildren();
		repos.textContent = error.message
	}
}
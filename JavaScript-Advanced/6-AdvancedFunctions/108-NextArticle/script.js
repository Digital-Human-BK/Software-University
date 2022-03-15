function getArticleGenerator(articles) {
    const contentDiv = document.getElementById('content');
    const arr = articles;

    return function showNext() {
        if (arr.length > 0) {
            let article = document.createElement('article');
            article.textContent = arr.shift();
            contentDiv.appendChild(article);
        }
    }
}
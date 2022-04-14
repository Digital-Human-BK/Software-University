function createPage() {
  const main = document.querySelector('main');

  async function getRecipes() {
    const response = await fetch('http://localhost:3030/jsonstore/cookbook/recipes');
    const recipesData = await response.json();
    handleResponse(recipesData);
  }
  getRecipes();

  function handleResponse(data) {
    main.textContent = '';

    for (let recipe in data) {
      let article = el('article', { className: 'preview' },
        el('div', { className: 'title' }, el('h2', {}, data[recipe].name)),
        el('div', { className: 'small' }, el('img', { src: `${data[recipe].img}` }))
      )
      article.addEventListener('click', showInfo.bind(null, data[recipe]._id, article));
      main.appendChild(article);
    }
  }

  function showInfo(id, oldArticle) {

    async function toggleInfo() {
      const response = await fetch(`http://localhost:3030/jsonstore/cookbook/details/${id}`);
      const recipeInfo = await response.json();

      const article = el('article', {},
        el('h2', {}, recipeInfo.name),
        el('div', { className: 'band' },
          el('div', { className: 'thumb' },
            el('img', { src: recipeInfo.img })),
          el('div', { className: 'ingredients' },
            el('h3', {}, 'Ingredients:'),
            el('ul', {}, ...recipeInfo.ingredients.map(i => el('li', {}, i)))
          )
        ),
        el('div', { className: 'description' },
          el('h3', {}, 'Preparation:'),
          ...recipeInfo.steps.map(s => el('li', {}, s))
        )
      );

      oldArticle.replaceWith(article);
    }
    toggleInfo();
  }

  function el(type, attr, ...content) {
    const element = document.createElement(type);
    Object.assign(element, attr);

    for (let item of content) {
      if (typeof item == 'string' || typeof item == 'number') {
        item = document.createTextNode(item);
      }
      element.appendChild(item);
    }
    return element;
  }
}
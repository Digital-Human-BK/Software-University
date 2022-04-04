function solve() {
   const author = document.getElementById('creator');
   const title = document.getElementById('title');
   const category = document.getElementById('category');
   const content = document.getElementById('content');
   const archive = document.querySelector('.archive-section ol');

   const posts = document.querySelector('.site-content main section');
   posts.addEventListener('click', onClick);

   const createBtn = document.querySelector('.btn');
   createBtn.addEventListener('click', createArticle);

   function createArticle(ev) {
      ev.preventDefault();

      const deleteBtn = createEl('button', { className: 'btn' }, 'Delete');
      deleteBtn.classList.add('delete');
      const archiveBtn = createEl('button', { className: 'btn' }, 'Archive');
      archiveBtn.classList.add('archive');

      const article = createEl('article', {},
         createEl('h1', {}, title.value),
         createEl('p', {}, `Category: `, createEl('strong', {}, category.value)),
         createEl('p', {}, `Creator: ` , createEl('strong', {}, author.value)),
         createEl('p', {}, content.value.trim()),
         createEl('div', { className: 'buttons' }, deleteBtn, archiveBtn)
      );

      posts.appendChild(article);

      document.querySelector('.site-content form').reset();
   }

   function onClick(ev) {
      if (ev.target.tagName == 'BUTTON' && ev.target.classList.contains('delete')) {
         ev.target.parentNode.parentNode.remove()
      }

      if (ev.target.tagName == 'BUTTON' && ev.target.classList.contains('archive')) {
         const parent = ev.target.parentNode.parentNode;
         const title = parent.querySelector('h1').textContent;
         archive.appendChild(createEl('li', {}, title));

         Array.from(archive.children)
            .sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach(e => archive.appendChild(e));

         parent.remove()
      }
   }

   function createEl(type, attr, ...content) {
      const element = document.createElement(type);

      for (let prop in attr) {
         element[prop] = attr[prop];
      }

      for (let item of content) {
         if (typeof item === 'string' || typeof item === 'number') {
            item = document.createTextNode(item);
         }
         element.appendChild(item);
      }
      return element;
   }
}

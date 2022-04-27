import { html, updateBook } from './utility.js';


const updateTemplate = (book, ctx) => html`
<form @submit=${ev => onSubmit(ev, ctx)} id="edit-form">
  <input type="hidden" name="id" .value=${book._id}>
  <h3>Edit book</h3>
  <label>TITLE</label>
  <input type="text" name="title" placeholder="Title..." .value=${book.title}>
  <label>AUTHOR</label>
  <input type="text" name="author" placeholder="Author..." .value=${book.author}>
  <input type="submit" value="Save">
</form>`;

export function showUpdate(ctx) {
  if(ctx.book == undefined) {
    return null;
  } else {
    return updateTemplate(ctx.book, ctx);
  }
}

async function onSubmit(ev, ctx) {
  ev.preventDefault()
  const formData = new FormData(ev.target);

  const title = formData.get('title').trim();
  const author = formData.get('author').trim();
  const id = formData.get('id').trim();


  if (title != '' && author != '') {
    await updateBook(id, { title, author });

    ev.target.reset();
    delete ctx.book;
    ctx.update()
  } else {
    alert('All fields required!');
  }
}
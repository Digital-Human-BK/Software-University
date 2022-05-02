import { deleteBook, getBook, getBookLikes, getUserLikes, likeBook } from '../api/data.js';
import { html } from '../lib.js'
import { getUserData } from '../util.js';

const detailsTemplate = (book,isOwner, onDelete, likes, hasLiked, onLike ) => html`
<section id="details-page" class="details">
  <div class="book-information">
    <h3>${book.title}</h3>
    <p class="type">Type: ${book.type}</p>
    <p class="img"><img src=${book.imageUrl}></p>
    <div class="actions">
      ${isOwner 
      ? controls(book, onDelete)
      : null}

      ${hasLiked 
        ? html`<a @click=${onLike} class="button" href="javascript:void(0)">Like</a>`
        : null}

      ${html`<div class="likes">
                <img class="hearts" src="/images/heart.png">
                <span id="total-likes">Likes: ${likes}</span>
            </div>`}
    </div>

  </div>
  

  <div class="book-description">
    <h3>Description:</h3>
    <p>${book.description}</p>
  </div>
</section>`;

const controls = (book, onDelete) => html`
  <a class="button" href="/edit/${book._id}">Edit</a>
  <a @click=${onDelete} class="button" href="javascript:void(0)">Delete</a>`;

export async function detailsPage(ctx){
  const book = await getBook(ctx.params.id);
  const userData = getUserData();
  
  const [likes, myLikes] = await Promise.all([
    getBookLikes(book._id),
    userData? getUserLikes(book._id, userData.id) : 0
  ]);

  
  const isOwner = userData && userData.id == book._ownerId;
  const hasLiked = userData && userData.id != book._ownerId && myLikes == 0;
  
  

  ctx.render(detailsTemplate(book,isOwner, onDelete, likes, hasLiked, onLike));

  async function onDelete(){
    if(confirm('Are you sure?')){
     await deleteBook(book._id);
     ctx.page.redirect('/'); 
    }    
  }

  async function onLike(){
    await likeBook({bookId: book._id});
    ctx.page.redirect('/details/' + book._id);
  }
}  


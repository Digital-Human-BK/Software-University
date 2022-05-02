import { createComment, deleteGame, getGameById, getGameComments } from '../api/data.js';
import { html } from '../lib.js';
import { getUserData } from '../util.js';

const detailsTemplate = (game, isOwner, onDelete, comments, onSubmit, userData) => html`
<section id="game-details">
  <h1>Game Details</h1>
  <div class="info-section">

    <div class="game-header">
      <img class="game-img" src=${game.imageUrl} />
      <h1>${game.title}</h1>
      <span class="levels">MaxLevel: ${game.maxLevel}</span>
      <p class="type">${game.category}</p>
    </div>

    <p class="text">${game.summary}</p>

    ${showComments(comments)}

    ${isOwner
    ? html`
      <div class="buttons">
        <a href="/edit/${game._id}" class="button">Edit</a>
        <a @click=${onDelete} href="javascript:void(0)" class="button">Delete</a>
      </div>` 
    : null}  

  </div>

  ${userData && isOwner == false
   ? addComment(onSubmit)
   : null }

</section>`;

const showComments = (comments) => html`
<div class="details-comments">
    <h2>Comments:</h2>
    ${comments.length > 0 
    ? html`<ul>
      ${comments.map(c => html`
        <li class="comment">
            <p>Content: ${c.comment}</p>
        </li>`)}
    </ul>`
  : html`<p class="no-comment">No comments.</p>`}    
</div>`;

const addComment = (onSubmit) => html`
<article class="create-comment">
    <label>Add new comment:</label>
    <form @submit=${onSubmit} class="form">
        <textarea name="comment" placeholder="Comment......"></textarea>
        <input class="btn submit" type="submit" value="Add Comment">
    </form>
</article>`;

export async function detailsPage(ctx) {
  const game = await getGameById(ctx.params.id);
  const comments = await getGameComments(ctx.params.id);

  const userData = getUserData();
  const isOwner = userData && userData.id == game._ownerId;

  ctx.render(detailsTemplate(game, isOwner, onDelete, comments, onSubmit, userData));

  async function onDelete() {
    if (confirm(`Are you sure you want to delete ${game.title}?`)) {
      await deleteGame(game._id);
      ctx.page.redirect('/');
    }
  }

  async function onSubmit(ev){
    ev.preventDefault();

    const comment = new FormData(ev.target).get('comment').trim();

    if(comment == '') {
      return alert('Comment must be more than 0 characters long');
    }
    try {
      await createComment({
      comment,
      gameId: ctx.params.id
    });
    } catch (error) {
      alert(error.message)
    }
    

    ev.target.reset();
    ctx.page.show('/details/' + ctx.params.id);
  }
}
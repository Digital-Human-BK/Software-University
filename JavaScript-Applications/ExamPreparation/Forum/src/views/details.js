import { getTopicById, getCommentsByTipocId} from '../api/data.js';
import { spinner } from '../common/spinner.js';
import { html, until } from '../lib.js';
import { getUserData } from '../util.js';

const detailsTemplate = (topicPromise) => html`
<div class="drop main">
  ${until(topicPromise, spinner())}
</div>`;

const topicCard = (topic, isOwner, comments) => html`
<header>
  <h1>${topic.title}</h1>
  <div class="controls">
    ${isOwner 
    ? html`<a class="action" href=${`/edit/${topic._id}`}>Edit</a><a class="action" href="javascript:void(0)">Delete</a>`  
    : html`<span>By ${topic.author.username}</span>`}
  </div>
</header> 
  
<div class="topic-content">
  <p>${topic.content}</p>
</div>
<div class="main">
  ${comments.map(commentCard)}
</div>`;

const commentCard = (comment) => html`
<article class="preview">
  <header>${comment.author.username}</header>
  <p>${comment.content}</p>
</article>`;

export function detailsPage(ctx) {
  ctx.render(detailsTemplate(loadDetails(ctx.params.id)));
}

async function loadDetails(id) {
  const [topic, comments] = await Promise.all([
    getTopicById(id),
    getCommentsByTipocId(id)
  ]);

  const userData = getUserData();
  const isOwner = userData && userData.id == topic._ownerId;

  return topicCard(topic, isOwner, comments);
}
//create dom element function
export function el(type, attr, ...content) {
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

// create topics card preview in index.html
export function createTopicPreview(data) {

  const element = el('div', { className: 'topic-name-wrapper' },
    el('div', { className: 'topic-name' },
      el('a', { href: 'javascript:void(0)', className: 'normal' },
        el('h2', {}, data.title)
      ),
      el('div', { className: 'columns' },
        el('div', {},
          el('p', {}, `Date: `, el('time', {}, data.dateTime)),
          el('div', { className: 'nick-name' },
            el('p', {}, `Username: `, el('span', {}, data.username))
          )
        )
      )
    )

  )
  element.dataset.id = data._id;
  return element;
}
// creates topic card in theme-content
export function displayTopicContent(data) {
  const element = el('div', { className: 'header' },
    el('img', { src: './static/profile.png', alt: 'avatar' }),
    el('p', {},
      el('span', {}, data.username),
      ' posted on ',
      el('time', {}, data.dateTime)
    ),
    el('p', { className: 'post-content' }, data.postText)
  );
  return element;
}

export function displayTopicComments(data){
  const element = el('div', {className: 'topic-name-wrapper'}, 
    el('div', {className: 'topic-name'}, 
      el('p', {}, 
        el('strong', {}, data.username),
        ' comented on ',
        el('time', {}, data.dateTime)
      ),
      el('div', {className: 'post-content'}, 
        el('p', {}, data.text)
      )
    )
  );
  return element;
}
/*
<div class="topic-name-wrapper">
    <div class="topic-name">
        <p><strong>Daniel</strong> commented on <time>3/15/2021, 12:39:02 AM</time></p>
        <div class="post-content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure facere sint
                dolorem quam.</p>
        </div>
    </div>
</div>
*/
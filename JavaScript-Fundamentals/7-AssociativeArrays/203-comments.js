function comments(input) {
  let articles = {};
  let users = {};

  for (const line of input) {
    if (line.includes('user ')) {
      addUser(line);
    } else if (line.includes('article ')) {
      addArticle(line);
    } else if (line.includes(' posts on ')) {
      storePost(line);
    }
  }

  let sortedArticles = Object.keys(articles).sort((a, b) => {
    return articles[b].length - articles[a].length
  });

  let sortedUsers = Object.keys(users).sort((a, b) => {
    return a.localeCompare(b);
  });

  sortedArticles.forEach(art => {
    console.log(`Comments on ${art}`);

    sortedUsers.forEach(user => {
      if (users[user][art]) {
        for (let i = 0; i < users[user][art].length; i++) {
          console.log(users[user][art][i]);
        }
      }
    });
  });

  // functions
  function addUser(line) {
    let username = line.split('user ')[1];
    if (users[username] == undefined) {
      users[username] = {};
    }
  }

  function addArticle(line) {
    let article = line.split('article ')[1];
    if (articles[article] == undefined) {
      articles[article] = [];
    }
  }

  function storePost(line) {
    let [username, rest] = line.split(' posts on ');
    let [article, post] = rest.split(': ');
    let [title, comment] = post.split(', ');
    if (users[username] && articles[article]) {
      if (users[username][article] == undefined) {
        users[username][article] = [];
      }
      users[username][article].push(`--- From user ${username}: ${title} - ${comment}`)
      articles[article].push([title, comment]);
    }
  }
}
comments([
  'user aUser123',
  'someUser posts on someArticle: NoTitle, stupidComment',
  'article Books',
  'article Movies',
  'article Shopping',
  'user someUser',
  'user uSeR4',
  'user lastUser',
  'uSeR4 posts on Books: I like books, I do really like them',
  'uSeR4 posts on Movies: I also like movies, I really do',
  'uSeR4 posts on Movies: I also like moviesTEST, I really doTEST',
  'someUser posts on Shopping: title, I go shopping every day',
  'someUser posts on Movies: Like, I also like movies very much',
])
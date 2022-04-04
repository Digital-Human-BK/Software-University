class Story {
  constructor(title, creator) {
    this.title = title;
    this.creator = creator;
    this._comments = [];
    this._likes = [];
    this.firstLike = '';
  }

  get likes() {
    if (this._likes.length == 0) {
      return `${this.title} has 0 likes`;
    }

    if (this._likes.length == 1) {
      return `${this._likes[0]} likes this story!`;
    } else {
      return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`;
    }
  }

  like(username) {
    if (this.creator === username) {
      throw new Error("You can't like your own story!");
    }
    if (this._likes.includes(username)) {
      throw new Error("You can't like the same story twice!");
    } else {
      this._likes.push(username);
      return `${username} liked ${this.title}!`
    }
  }

  dislike(username) {
    if (this._likes.includes(username)) {
      this._likes.splice(this._likes.indexOf(username), 1);
      return `${username} disliked ${this.title}`;
    } else {
      throw new Error("You can't dislike this story!");
    }
  }

  comment(username, content, id) {
    if (id === undefined || this._comments[id - 1] === undefined) {
      id = this._comments.length + 1;
      this._comments.push({ id, username, content, replies: [] });
      return `${username} commented on ${this.title}`;
    } else {
      let replyId = Number(`${id}.${this._comments[id - 1].replies.length + 1}`);
      this._comments[id - 1].replies.push({ id: replyId, username, content });
      return "You replied successfully";
    }
  }

  toString(sortType) {
    if (sortType == 'asc') {
      this._comments.sort((a, b) => a.id - b.id);
      this._comments.forEach(c => c.replies.sort((a, b) => a.id - b.id));
    }

    if (sortType == 'desc') {
      this._comments.sort((a, b) => b.id - a.id);
      this._comments.forEach(c => c.replies.sort((a, b) => b.id - a.id));
    }

    if (sortType === 'username') {
      this._comments.sort((a, b) => a.username.localeCompare(b.username));
      this._comments.forEach(c => c.replies.sort((a, b) => a.username.localeCompare(b.username)));
    }

    let result = [
      `Title: ${this.title}`,
      `Creator: ${this.creator}`,
      `Likes: ${this._likes.length}`,
      `Comments:`
    ];

    this._comments.forEach(c => {
      result.push(`-- ${c.id}. ${c.username}: ${c.content}`);
      c.replies.forEach(r=> result.push(`--- ${r.id}. ${r.username}: ${r.content}`))
    });

    return result.join('\n');
  }
}
let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));


/*
John likes this story!
My Story has 0 likes
Ammy commented on My Story
You replied successfully

Title: My Story
Creator: Anny
Likes: 0
Comments:
-- 2. Ammy: New Content
-- 3. Jessy: Nice :)
-- 1. Sammy: Some Content
--- 1.2. SAmmy: Reply@
--- 1.1. Zane: Reply

Title: My Story
Creator: Anny
Likes: 1
Comments:
-- 3. Jessy: Nice :)
-- 2. Ammy: New Content
-- 1. Sammy: Some Content
--- 1.2. SAmmy: Reply@
--- 1.1. Zane: Reply
*/
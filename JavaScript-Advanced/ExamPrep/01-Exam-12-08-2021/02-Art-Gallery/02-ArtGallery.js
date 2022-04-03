class ArtGallery {
  constructor(creator) {
    this.creator = creator;
    this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 };
    this.listOfArticles = [];
    this.guests = [];
  }

  addArticle(articleModel, articleName, quantity) {
    articleModel = articleModel.toLowerCase();
    if (this.possibleArticles[articleModel] == undefined) {
      throw new Error("This article model is not included in this gallery!");
    }

    for (const article of this.listOfArticles) {
      if (article.articleName == articleName) {
        if (article.articleModel == articleModel) {
          article.quantity += quantity;
        }
        break;
      } else {
        this.listOfArticles.push({ articleModel, articleName, quantity });
        break;
      }
    }
    if (this.listOfArticles.length === 0) {
      this.listOfArticles.push({ articleModel, articleName, quantity });
    }

    return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
  }

  inviteGuest(guestName, personality) {
    for (const guest of this.guests) {
      if (guest.guestName == guestName) {
        throw new Error(`${guestName} has already been invited.`);
      }
    }

    let points;
    if (personality === 'Vip') {
      points = 500;
    } else if (personality === 'Middle') {
      points = 250;
    } else {
      points = 50;
    }

    this.guests.push({ guestName, points, purchaseArticle: 0 })
    return `You have successfully invited ${guestName}!`
  }

  buyArticle(articleModel, articleName, guestName) {
    let isNotFound = true;
    let qty;
    let artCost;
    for (const article of this.listOfArticles) {
      if (article.articleName == articleName && article.articleModel === articleModel) {
        isNotFound = false;
        qty = article.quantity;
        artCost = this.possibleArticles[articleModel];
      }
    }
    if (isNotFound) {
      throw new Error("This article is not found.");
    }

    if (qty === 0) {
      return `The ${articleName} is not available.`
    }

    let guestPoints
    let guestNotPresent = true;
    for (const guest of this.guests) {
      if (guest.guestName === guestName) {
        guestNotPresent = false;
        guestPoints = guest.points;
      }
    }

    if (guestNotPresent) {
      return "This guest is not invited.";
    }

    if (guestPoints < artCost) {
      return "You need to more points to purchase the article.";
    } else {
      for (const guest of this.guests) {
        if (guest.guestName === guestName) {
          guest.points -= artCost;
          guest.purchaseArticle++;
        }
      }
      for (const article of this.listOfArticles) {
        if (article.articleName == articleName && article.articleModel === articleModel) {
          article.quantity--;
        }
      }
      return `${guestName} successfully purchased the article worth ${artCost} points.`
    }
  }

  showGalleryInfo(criteria) {
    let result = []
    if (criteria == 'article') {
      result.push("Articles information:");
      for (const article of this.listOfArticles) {
        result.push(`${article.articleModel} - ${article.articleName} - ${article.quantity}`);
      }
      return result.join('\n');
    } else if (criteria == 'guest') {
      result.push("Guests information:");
      for (const guest of this.guests) {
        result.push(`${guest.guestName} - ${guest.purchaseArticle}`);
      }
      return result.join('\n');
    }
  }
}
const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));


// Articles information:
// picture - Mona Liza - 3
// item - Ancient vase - 1
// Guests information:
// John - 1
// Peter - 1

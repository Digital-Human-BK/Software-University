class ArtGallery {
  constructor(creator) {
    this.creator = creator;
    this.possibleArticles = { picture: 200, photo: 50, item: 250 };
    this.listOfArticles = [];
    this.guests = [];
  }
  addArticle(articleModel, articleName, quantity) {
    let missing = true;
    articleModel = articleModel.toLowerCase();
    if (!this.possibleArticles.hasOwnProperty(articleModel)) {
      throw new Error("This article model is not included in this gallery!");
    }
    for (const sub of this.listOfArticles) {
      if (sub.articleName == articleName) {
        sub.quantity += Number(quantity);
        missing = false;
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
      }
    }
    if (missing) {
      this.listOfArticles.push({
        articleModel,
        articleName,
        quantity: Number(quantity),
      });
      return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }
  }
  inviteGuest(guestName, personality) {
    let pts;
    // : {guestName, points, purchaseArticle: default 0}.
    for (const guest of this.guests) {
      if (guest.guestName == guestName) {
        throw new Error(`${guestName} has already been invited.`);
      }
    }
    if (personality == "Vip") {
      pts = 500;
    } else if (personality == "Middle") {
      pts = 250;
    } else {
      pts = 50;
    }
    this.guests.push({ guestName, points: pts, purchaseArticle: 0 });
    return `You have successfully invited ${guestName}!`;
  }
  buyArticle(articleModel, articleName, guestName) {
    articleModel = articleModel.toLowerCase();
    let missing = true;
    let missingGuest = true;
    let articleCost = this.possibleArticles[articleModel];
    articleCost = Number(articleCost);
    // If the articleName is not found in listOfArticles array
    // or the articleModel doesn’t match, throw a new error:
    // "This article is not found."
    for (const sub of this.listOfArticles) {
      if (sub.articleName == articleName && sub.articleModel == articleModel) {
        // ||
        missing = false;
 
        if (sub.quantity == 0) {
          return `The ${articleName} is not available.`;
        }
      }
    }
    if (missing) {
      throw new Error("This article is not found.");
    }
    for (const guest of this.guests) {
      if (guest.guestName == guestName) {
        missingGuest = false;
        if (guest.points < articleCost) {
          return "You need to more points to purchase the article.";
        } else if (guest.points >= articleCost) {
          guest.points -= articleCost;
          guest.purchaseArticle += 1;
          for (const sub of this.listOfArticles) {
              if(sub.articleModel == articleModel){
                  sub.quantity -=1;
              }
          }
          return `${guestName} successfully purchased the article worth ${articleCost} points.`;
        }
      }
    }
    if (missingGuest) {
      return `This guest is not invited.`;
    }
  }
  showGalleryInfo(criteria) {
    let resultForPrint = [];
    if (criteria == "article") {
      resultForPrint.push("Articles information:");
      for (const sub of this.listOfArticles) {
        resultForPrint.push(
          `${sub.articleModel} - ${sub.articleName} - ${sub.quantity}`
        );
      }
      return resultForPrint.join('\n')
    } else if (criteria == "guest") {
      resultForPrint.push("Guests information:");
      for (const guest of this.guests) {
        resultForPrint.push(`${guest.guestName} - ${guest.purchaseArticle}`);
      }
      return resultForPrint.join('\n')
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
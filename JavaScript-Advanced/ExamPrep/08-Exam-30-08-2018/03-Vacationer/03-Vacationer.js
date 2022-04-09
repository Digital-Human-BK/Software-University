class Vacationer {
  constructor(name, card = [1111, '', 111]) {
    this.fullName = name;

    if (typeof card[0] !== 'number' || typeof card[2] !== 'number') {
      throw new Error("Invalid credit card details");
    }

    this.creditCard = {
      cardNumber: card[0],
      expirationDate: card[1],
      securityNumber: card[2]
    }
    this.idNumber = this.generateIDNumber();
    this.wishList = [];
  }

  get fullName() {
    return this._fullName;
  }

  set fullName(value) {
    if (value.length !== 3) {
      throw new Error("Name must include first name, middle name and last name");
    }

    const validNamePtn = /^[A-Z][a-z]+$/;
    for (const name of value) {
      if (validNamePtn.test(name) == false) {
        throw new Error('Invalid full name');
      }
    }
    return this._fullName = { firstName: value[0], middleName: value[1], lastName: value[2] };
  }

  generateIDNumber() {
    //231 * firstName’s first letter’s ASCII code + 139 * middleName length
    let a = this.fullName.firstName.charCodeAt(0);
    let b = this.fullName.middleName.length;
    let c = ['a', 'e', 'o', 'i', 'u'].includes(this.fullName.lastName[this.fullName.lastName.length - 1]) ? 8 : 7;

    let id = (231 * a + 139 * b) + `${c}`;
    return id;
  }

  addCreditCardInfo(array) {
    if (array.length != 3) {
      throw new Error('Missing credit card information');
    }

    if ((typeof array[0] !== 'number') || (typeof array[2] !== 'number')) {
      throw new Error("Invalid credit card details");
    }

    this.creditCard.cardNumber = array[0];
    this.creditCard.expirationDate = array[1];
    this.creditCard.securityNumber = array[2];
  }
  addDestinationToWishList(dest) {
    if (this.wishList.includes(dest)) {
      throw new Error('Destination already exists in wishlist');
    }

    this.wishList.push(dest);
    this.wishList.sort((a, b) => a.length - b.length);
  }

  getVacationerInfo() {
    let wishText = this.wishList.length == 0 ? 'empty' : `${this.wishList.join(', ')}`;

    const result = [
      `Name: ${this.fullName.firstName} ${this.fullName.middleName} ${this.fullName.lastName}`,
      `ID Number: ${this.idNumber}`,
      `Wishlist:`,
      `${wishText}`,
      `Credit Card:`,
      `Card Number: ${this.creditCard.cardNumber}`,
      `Expiration Date: ${this.creditCard.expirationDate}`,
      `Security Number: ${this.creditCard.securityNumber}`
    ];
    return result.join('\n');
  }
}
// Initialize vacationers with 2 and 3 parameters
let vacationer1 = new Vacationer(["Vania", "Ivanova", "Zhivkova"]);
let vacationer2 = new Vacationer(["Tania", "Ivanova", "Zhivkova"],
  [123456789, "10/01/2018", 777]);

// Should throw an error (Invalid full name)

try {
  let vacationer3 = new Vacationer(["Vania", "Ivanova", "ZhiVkova"]);
} catch (err) {
  console.log("Error: " + err.message);
}

// Should throw an error (Missing credit card information)
try {
  let vacationer3 = new Vacationer(["Zdravko", "Georgiev", "Petrov"]);
  vacationer3.addCreditCardInfo([123456789, "20/10/2018"]);
} catch (err) {
  console.log("Error: " + err.message);
}

vacationer1.addDestinationToWishList('Spain');
vacationer1.addDestinationToWishList('Germany');
vacationer1.addDestinationToWishList('Bali');

// Return information about the vacationers
console.log(vacationer1.getVacationerInfo());
console.log(vacationer2.getVacationerInfo());

// Corresponding output
// Error: Invalid full name

// Error: Missing credit card information

// Name: Vania Ivanova Zhivkova
// ID Number: 208398
// Wishlist:
// Bali, Spain, Germany
// Credit Card:
// Card Number: 1111
// Expiration Date:
// Security Number: 111

// Name: Tania Ivanova Zhivkova
// ID Number: 203778
// Wishlist:
// empty
// Credit Card:
// Card Number: 123456789
// Expiration Date: 10/01/2018
// Security Number: 777
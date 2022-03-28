class Contact {
  constructor(firstName, lastName, phone, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.email = email;
    this._online = false;
  }
  get online() {
    return this._online
  }

  set online(value) {
    this._online = value;

    if (this.titleDiv) {
      if (value) {
        this.titleDiv.classList.add('online');
      } else {
        this.titleDiv.classList.remove('online')
      }
    }
  }

  render(id) {
    const parent = document.getElementById(id);

    const article = document.createElement('article');

    this.titleDiv = document.createElement('div');
    this.titleDiv.className = 'title';
    this.titleDiv.textContent = `${this.firstName} ${this.lastName}`;
    const showInfoBtn = document.createElement('button');
    showInfoBtn.textContent = '\u2139';
    this.titleDiv.appendChild(showInfoBtn);

    if (this._online) {
      this.titleDiv.classList.add("online");
  }

    const infoDiv = document.createElement('div');
    infoDiv.className = 'info';
    infoDiv.style.display = 'none';
    const phoneSpan = document.createElement('span');
    phoneSpan.textContent = `\u260E ${this.phone}`;
    const emailSpan = document.createElement('span');
    emailSpan.textContent = `\u2709 ${this.email}`;
    infoDiv.appendChild(phoneSpan);
    infoDiv.appendChild(emailSpan);

    article.appendChild(this.titleDiv);
    article.appendChild(infoDiv);

    parent.appendChild(article);

    showInfoBtn.addEventListener('click', () => {
      if (infoDiv.style.display == 'none') {
        infoDiv.style.display = 'block';
      } else {
        infoDiv.style.display = 'none'
      }
    });
  }

}


let contacts = [
  new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
  new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
  new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
];
contacts.forEach(c => c.render('main'));

// After 1 second, change the online status to true
setTimeout(() => contacts[1].online = true, 1000);

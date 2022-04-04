window.addEventListener('load', solution);

function solution() {
  const [fullName, email, phone, address, postCode, submitBtn] = document.querySelectorAll('#form input');
  const preview = document.getElementById('infoPreview');
  const editBtn = document.getElementById('editBTN');
  const continueBtn = document.getElementById('continueBTN');
  const block = document.getElementById('block')

  submitBtn.addEventListener('click', addToPreview);
  editBtn.addEventListener('click', edit);
  continueBtn.addEventListener('click', completeReservation);

  function addToPreview() {
    if (fullName.value.trim() != '' && email.value.trim() != '') {
      const nameLi = createEl('li', {}, `Full Name: ${fullName.value}`);
      const emailLi = createEl('li', {}, `Email: ${email.value}`);
      preview.appendChild(nameLi);
      preview.appendChild(emailLi);

      if (phone.value.trim() != '') {
        const phoneLi = createEl('li', {}, `Phone Number: ${phone.value}`);
        preview.appendChild(phoneLi);
      }
      if (address.value.trim() != '') {
        const addressLi = createEl('li', {}, `Address: ${address.value}`);
        preview.appendChild(addressLi);
      }
      if (postCode.value.trim() != '') {
        const postLi = createEl('li', {}, `Postal Code: ${postCode.value}`);
        preview.appendChild(postLi);
      }
      fullName.value = '';
      email.value = '';
      phone.value = '';
      address.value = '';
      postCode.value = '';

      submitBtn.disabled = true;
      editBtn.disabled = false;
      continueBtn.disabled = false;
    }
  }

  function edit() {
    const listItems = Array.from(preview.querySelectorAll('li')).map(li => li.textContent);

    fullName.value = listItems.shift().slice(11).trim();
    email.value = listItems.shift().slice(6).trim();

    listItems.forEach(li => {
      if (li.includes('Phone Number: ')) {
        phone.value = Number(li.slice(13));
      }
      if (li.includes('Address: ')) {
        address.value = li.slice(9).trim();
      }
      if (li.includes('Postal Code: ')) {
        postCode.value = Number(li.slice(12));
      }
    });

    preview.textContent = '';
    editBtn.disabled = true;
    continueBtn.disabled = true;
    submitBtn.disabled = false;
  }

  function completeReservation(ev) {
    block.textContent ='';
    block.appendChild(createEl('h3', {}, "Thank you for your reservation!"));    
  }

  function createEl(type, attr, ...content) {
    const element = document.createElement(type);

    for (let prop in attr) {
      element[prop] = attr[prop];
    }

    for (let item of content) {
      if (typeof item === 'string' || typeof item === 'number') {
        item = document.createTextNode(item);
      }
      element.appendChild(item);
    }
    return element;
  }
}

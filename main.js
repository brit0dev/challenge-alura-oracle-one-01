let encryptBt = document.querySelector('.button--encrypt');
let decryptBt = document.querySelector('.button--decrypt');
let copyBt = document.querySelector('.button--copy');
let input = document.querySelector('.text-input');
let sidebar = document.querySelector('.sidebar');
let message = document.querySelector('.sidebar__encrypted-message');

let encryptor = {
  substitutions: [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['u', 'ufat'],
    ['o', 'ober'],
  ],

  decrypt(text) {
    return this.hash(text, (decrypt = true));
  },

  hash(text, decrypt = false) {
    this.substitutions.map(([letter, keyword]) => {
      if (decrypt) [letter, keyword] = [keyword, letter];

      text = text.replaceAll(letter, keyword);
    });

    return text;
  },
};

function showEncryptedMessage(text) {
  if (text == '') return false;
  sidebar.classList.remove('sidebar--empty');
  sidebar.classList.add('sidebar--with-message');
  message.innerHTML = text;
}

function copyToClipboard(value) {
  navigator.clipboard.writeText(value);
}

function copiedBtInteraction() {
  copyBt.innerHTML = 'Copiado para área de transferência!';
  copyBt.setAttribute('disable', true);
  setTimeout(() => {
    copyBt.innerHTML = 'Copiar';
    copyBt.removeAttribute('disable');
  }, 1500);
}

encryptBt.onclick = function () {
  showEncryptedMessage(encryptor.hash(input.value));
};

decryptBt.onclick = function () {
  showEncryptedMessage(encryptor.decrypt(input.value));
};

copyBt.onclick = function () {
  if (copyBt.getAttribute('disable')) return false;
  copyToClipboard(message.textContent);
  copiedBtInteraction();
};

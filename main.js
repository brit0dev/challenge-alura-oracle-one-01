let encryptor = {
  substitutions: [
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['e', 'enter'],
    ['u', 'ufat'],
  ],

  decrypt(text) {
    return this.hash(text, (decrypt = true));
  },

  hash(text, decrypt = false) {
    this.substitutions.map(([letter, keyword]) => {
      if (decrypt) [letter, keyword] = [keyword, letter];

      text = text.replace(letter, keyword);
    });

    return text;
  },
};

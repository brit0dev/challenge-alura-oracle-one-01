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

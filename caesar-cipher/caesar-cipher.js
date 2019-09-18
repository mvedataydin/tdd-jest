const caesarCipher = (string, shift) => {
  let res = '';
  for (let i = 0; i < string.length; i += 1) {
    if (string.charAt(i).match(/^[^a-zA-Z]+$/)) {
      res += string.charAt(i);
    } else if (string.charAt(i) === string.charAt(i).toLowerCase()) {
      res += String.fromCharCode(((string.charCodeAt(i) + shift - 97) % 26) + 97);
    } else if (string.charAt(i) === string.charAt(i).toUpperCase()) {
      res += String.fromCharCode(((string.charCodeAt(i) + shift - 65) % 26) + 65);
    }
  }

  return res;
};

module.exports = caesarCipher;

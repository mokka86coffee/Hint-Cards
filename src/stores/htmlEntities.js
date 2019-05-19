export default {
  encode: function(str) {
    let buf = [];

    for (let i = str.length - 1; i >= 0; i--) {
      buf.unshift(`&#${str[i].charCodeAt()};`);
    }

    return buf.join("");
  },
  decode: function(str) {
    return str.replace(/&#(\d+);/g, function(match, dec) {
      return String.fromCharCode(dec);
    });
  }
};

async function makeTextUrlCompatible(text) {
  return text.toLowerCase().replaceAll(' ', '-');
}

module.exports = {makeTextUrlCompatible};

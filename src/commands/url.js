let commands = {},
  helpers = {},
  extensions = {};

commands.setUrl = async function setUrl(url) {
  // TODO: add support for URLs
};

commands.getUrl = async function getUrl() {
  // TODO: add support for URLs
};

Object.assign(extensions, commands, helpers);
export { commands, helpers };
export default extensions;

let commands = {},
  helpers = {},
  extensions = {};

commands.click = async function click(elementId) {
  // TODO: Add support for clicking on elements
};

Object.assign(extensions, commands, helpers);
export { commands, helpers };
export default extensions;

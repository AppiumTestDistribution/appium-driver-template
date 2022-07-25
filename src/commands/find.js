let commands = {},
  helpers = {},
  extensions = {},
  elementCache = {};

helpers.findElOrEls = async function findElOrEls(
  strategy,
  selector,
  mult,
  context
) {
  // TODO: add support for finding element
};

commands.findElement = async function findElement(strategy, selector) {
  return this.findElOrEls(strategy, selector, false);
};

Object.assign(extensions, commands, helpers);
export { commands, helpers, elementCache };
export default extensions;

/**
 * Get a simple list of errors.
 */
function getMessages(err) {
  let list = [];

  for (let i = 0; i < err.errors.length; i++) {
    list.push(err.errors[i].message);
  }

  return list;
}

module.exports = getMessages;

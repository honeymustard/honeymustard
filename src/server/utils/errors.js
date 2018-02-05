/**
 * Get a simple list of errors.
 */
function getMessages(err) {
  var list = [];
  for (e in err.errors) {
    list.push(err.errors[e].message);
  }
  return list;
}

module.exports = { getMessages };

/**
 * @param {varType} time Description
 * @param {varType} tagName Description
 * @return {void} description
 */
function ua(days, tagName, callback) {
  var tagName = tagName || 'useraction',
    days = days || 1;
  try {
    var closeDay = localStorage[tagName];
    if (closeDay) {
      if (new Date().getDate() - closeDay < days) {
        callback && callback();
      } else {
        localStorage.removeItem(tagName);
      }
    }
    localStorage[tagName] = new Date().getDate();
  } catch (ex) {
    console.log('Browser does not support localStorge');
  }
}

module.exports = userAction;

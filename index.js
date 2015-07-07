var htmlToXlsx = require("./lib/htmlToXlsx.js");

module.exports = function(options) {
    return htmlToXlsx(options || {});
};
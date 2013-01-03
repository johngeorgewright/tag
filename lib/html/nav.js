var OpenHtmlTag = require('./open'),
    util        = require('util');

function NavHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'nav', attrs, content);
}

util.inherits(NavHtmlTag, OpenHtmlTag);

module.exports = NavHtmlTag;


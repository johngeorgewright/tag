var OpenHtmlTag = require('./open'),
    util        = require('util');

function NavHtmlTag(content, attrs){
  OpenHtmlTag.call(this, 'nav', content, attrs);
}

util.inherits(NavHtmlTag, OpenHtmlTag);

module.exports = NavHtmlTag;


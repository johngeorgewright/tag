var OpenHtmlTag = require('./open'),
    util        = require('util');

function HeaderHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'header', attrs, content);
}

util.inherits(HeaderHtmlTag, OpenHtmlTag);

module.exports = HeaderHtmlTag;


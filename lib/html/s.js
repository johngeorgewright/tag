var OpenHtmlTag = require('./open'),
    util        = require('util');

function SHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 's', attrs, content);
}

util.inherits(SHtmlTag, OpenHtmlTag);

module.exports = SHtmlTag;


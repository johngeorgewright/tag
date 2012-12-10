var OpenHtmlTag = require('./open'),
    util        = require('util');

function EmHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'em', attrs, content);
}

util.inherits(EmHtmlTag, OpenHtmlTag);

module.exports = EmHtmlTag;


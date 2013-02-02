var OpenHtmlTag = require('./open'),
    util        = require('util');

function StrongHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'strong', attrs, content);
}

util.inherits(StrongHtmlTag, OpenHtmlTag);

module.exports = StrongHtmlTag;


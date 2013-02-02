var OpenHtmlTag = require('./open'),
    HtmlTag     = require('./'),
    util        = require('util');

function SpanHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'span', attrs, content);
}

util.inherits(SpanHtmlTag, OpenHtmlTag);

module.exports = SpanHtmlTag;


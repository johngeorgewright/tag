var HtmlTag     = require('./'),
    OpenHtmlTag = require('./open'),
    util        = require('util');

function BlockQuoteHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'blockquote', attrs, content);
}

util.inherits(BlockQuoteHtmlTag, OpenHtmlTag);

BlockQuoteHtmlTag.attrs = {
  cite : HtmlTag.STRING
};

module.exports = BlockQuoteHtmlTag;


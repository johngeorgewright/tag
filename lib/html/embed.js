var ClosedHtmlTag = require('./closed'),
    HtmlTag       = require('./'),
    util          = require('util');

function EmbedHtmlTag(attrs){
  ClosedHtmlTag.call(this, attrs);
}

util.inherits(EmbedHtmlTag, ClosedHtmlTag);

EmbedHtmlTag.attrs = {
  height : HtmlTag.NUMBER,
  src    : HtmlTag.STRING,
  type   : HtmlTag.STRING,
  width  : HtmlTag.NUMBER
};

module.exports = EmbedHtmlTag;


var OpenHtmlTag = require('./open'),
    HtmlTag     = require('./'),
    util        = require('util');

function FontHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'font', attrs, content);
}

util.inherits(FontHtmlTag, OpenHtmlTag);

FontHtmlTag.attrs = {
  color : HtmlTag.STRING,
  face  : HtmlTag.STRING,
  size  : HtmlTag.NUMBER
};

module.exports = FontHtmlTag;


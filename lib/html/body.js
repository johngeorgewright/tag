var OpenHtmlTag = require('./open'),
    HtmlTag     = require('./'),
    util        = require('util');

function BodyHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'body', attrs, content);
}

util.inherits(BodyHtmlTag, OpenHtmlTag);

BodyHtmlTag.attrs = {
  alink      : HtmlTag.STRING,
  background : HtmlTag.STRING,
  bgcolor    : HtmlTag.STRING,
  link       : HtmlTag.STRING,
  text       : HtmlTag.STRING,
  vlink      : HtmlTag.STRING
};

module.exports = BodyHtmlTag;


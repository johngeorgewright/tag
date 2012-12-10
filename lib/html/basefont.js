var HtmlTag       = require('./'),
    ClosedHtmlTag = require('./closed'),
    util          = require('util');

function BaseFontHtmlTag(attrs){
  ClosedHtmlTag.call(this, 'basefont', attrs);
}

util.inherits(BaseFontHtmlTag, ClosedHtmlTag);

BaseFontHtmlTag.attrs = {
  color : HtmlTag.STRING,
  face  : HtmlTag.STRING,
  size  : HtmlTag.NUMBER
};

module.exports = BaseFontHtmlTag;


var ClosedHtmlTag = require('./closed'),
    HtmlTag       = require('./'),
    util          = require('util');
    
function ImgHtmlTag(attrs){
  ClosedHtmlTag.call(this, attrs);
}

util.inherits(ImgHtmlTag, ClosedHtmlTag);

ImgHtmlTag.attrs = {
  align : ['top', 'bottom', 'left', 'right', 'middle'],
  alt   : HtmlTag.STRING,
  border : HtmlTag.NUMBER,
  crossorigin : ['anonymous', 'use-credentials'],
  height      : HtmlTag.NUMBER,
  hspace      : HtmlTag.NUMBER,
  ismap       : HtmlTag.BOOLEAN,
  longdesc    : HtmlTag.STRING,
  src         : HtmlTag.STRING,
  usemap      : HtmlTag.STRING,
  vspace      : HtmlTag.NUMBER,
  width       : HtmlTag.NUMBER
};

module.exports = ImgHtmlTag;

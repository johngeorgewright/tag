var ClosedHtmlTag = require('./closed'),
    HtmlTag       = require('./'),
    util          = require('util');

function ColHtmlTag(attrs){
  ClosedHtmlTag.call(this, 'col', attrs);
}

util.inherits(ColHtmlTag, ClosedHtmlTag);

ColHtmlTag.attrs = {
  align   : ['left', 'right', 'justify', 'center', 'char'],
  char    : HtmlTag.STRING,
  charoff : HtmlTag.STRING,
  span    : HtmlTag.NUMBER,
  valgin  : ['top', 'middle', 'bottom', 'baseline'],
  width   : HtmlTag.STRING
};

module.exports = ColHtmlTag;


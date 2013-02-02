var OpenHtmlTag = require('./open'),
    HtmlTag     = require('./'),
    util        = require('util');

function TBodyHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'tbody', attrs, content);
}

util.inherits(TBodyHtmlTag, OpenHtmlTag);

TBodyHtmlTag.attrs = {
  align   : ['right', 'left', 'center', 'justify', 'char'],
  char    : HtmlTag.STRING,
  charoff : HtmlTag.NUMBER,
  valign  : ['top', 'middle', 'bottom', 'baseline']
};

module.exports = TBodyHtmlTag;


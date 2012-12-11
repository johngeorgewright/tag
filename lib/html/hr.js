var ClosedHtmlTag = require('./closed'),
    HtmlTag       = require('./'),
    util          = require('util');
    
function HrTag(attrs){
  ClosedHtmlTag.call(this, 'name', attrs);
}

util.inherits(HrTag, ClosedHtmlTag);

HrTag.attrs = {
  align   : ['left', 'center', 'right'],
  noshade : HtmlTag.BOOLEAN,
  size    : HtmlTag.NUMBER,
  width   : HtmlTag.STRING
}

module.exports = HrTag;

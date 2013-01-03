var OpenHtmlTag = require('./open'),
    HtmlTag     = require('./'),
    util        = require('util');

function OlHtmlTag(content, attrs){
  OpenHtmlTag.call(this, 'ol', content, attrs);
}

util.inherits(OlHtmlTag, OpenHtmlTag);

OlHtmlTag.attrs = {
  compact  : HtmlTag.BOOLEAN,
  reversed : HtmlTag.BOOLEAN,
  start    : HtmlTag.NUMBER,
  type     : [1, 'A', 'a', 'I', 'i']
};

module.exports = OlHtmlTag;


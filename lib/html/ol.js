var OpenHtmlTag = require('./open'),
    HtmlTag     = require('./'),
    util        = require('util');

function OlHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'ol', attrs, content);
}

util.inherits(OlHtmlTag, OpenHtmlTag);

OlHtmlTag.attrs = {
  compact  : HtmlTag.BOOLEAN,
  reversed : HtmlTag.BOOLEAN,
  start    : HtmlTag.NUMBER,
  type     : [1, 'A', 'a', 'I', 'i']
};

module.exports = OlHtmlTag;


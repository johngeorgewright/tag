var OpenHtmlTag = require('./open'),
    HtmlTag     = require('./'),
    util        = require('util');

function LabelHtmlTag(content, attrs){
  OpenHtmlTag.call(this, 'label', content, attrs);
}

util.inherits(LabelHtmlTag, OpenHtmlTag);

LabelHtmlTag.attrs = {
  for  : HtmlTag.STRING,
  form : HtmlTag.STRING
};

module.exports = LabelHtmlTag;


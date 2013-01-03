var OpenHtmlTag = require('./open'),
    HtmlTag     = require('./'),
    util        = require('util');

function LabelHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'label', attrs, content);
}

util.inherits(LabelHtmlTag, OpenHtmlTag);

LabelHtmlTag.attrs = {
  for  : HtmlTag.STRING,
  form : HtmlTag.STRING
};

module.exports = LabelHtmlTag;


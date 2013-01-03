var OpenHtmlTag = require('./open'),
    HtmlTag     = require('./'),
    util        = require('util');

function OptionHtmlTag(content, attrs){
  OpenHtmlTag.call(this, 'option', content, attrs);
}

util.inherits(OptionHtmlTag, OpenHtmlTag);

OptionHtmlTag.attrs = {
  disabled : HtmlTag.BOOLEAN,
  label    : HtmlTag.STRING,
  selected : HtmlTag.BOOLEAN,
  value    : HtmlTag.STRING
};

module.exports = OptionHtmlTag;


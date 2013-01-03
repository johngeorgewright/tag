var OpenHtmlTag = require('./open'),
    HtmlTag     = require('./'),
    util        = require('util');

function OptionHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'option', attrs, content);
}

util.inherits(OptionHtmlTag, OpenHtmlTag);

OptionHtmlTag.attrs = {
  disabled : HtmlTag.BOOLEAN,
  label    : HtmlTag.STRING,
  selected : HtmlTag.BOOLEAN,
  value    : HtmlTag.STRING
};

module.exports = OptionHtmlTag;


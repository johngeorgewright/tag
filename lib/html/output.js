var OpenHtmlTag = require('./open'),
    HtmlTag     = require('./'),
    util        = require('util');

function OutputHtmlTag(content, attrs){
  OpenHtmlTag.call(this, 'output', content, attrs);
}

util.inherits(OutputHtmlTag, OpenHtmlTag);

OutputHtmlTag.attrs = {
  'for' : HtmlTag.STRING,
  form  : HtmlTag.STRING,
  name  : HtmlTag.STRING
};

module.exports = OutputHtmlTag;


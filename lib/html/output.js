var OpenHtmlTag = require('./open'),
    HtmlTag     = require('./'),
    util        = require('util');

function OutputHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'output', attrs, content);
}

util.inherits(OutputHtmlTag, OpenHtmlTag);

OutputHtmlTag.attrs = {
  'for' : HtmlTag.STRING,
  form  : HtmlTag.STRING,
  name  : HtmlTag.STRING
};

module.exports = OutputHtmlTag;


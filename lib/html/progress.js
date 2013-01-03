var OpenHtmlTag = require('./open'),
    HtmlTag     = require('./'),
    util        = require('util');

function ProgressHtmlTag(content, attrs){
  OpenHtmlTag.call(this, 'progress', content, attrs);
}

util.inherits(ProgressHtmlTag, OpenHtmlTag);

ProgressHtmlTag.attrs = {
  max   : HtmlTag.NUMBER,
  value : HtmlTag.STRING
};

module.exports = ProgressHtmlTag;


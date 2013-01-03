var OpenHtmlTag = require('./open'),
    HtmlTag     = require('./'),
    util        = require('util');

function ProgressHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'progress', attrs, content);
}

util.inherits(ProgressHtmlTag, OpenHtmlTag);

ProgressHtmlTag.attrs = {
  max   : HtmlTag.NUMBER,
  value : HtmlTag.STRING
};

module.exports = ProgressHtmlTag;


var OpenHtmlTag = require('./open'),
    HtmlTag     = require('./'),
    util        = require('util');

function QHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'q', attrs, content);
}

util.inherits(QHtmlTag, OpenHtmlTag);

QHtmlTag.attrs = {
  cite : HtmlTag.STRING
};

module.exports = QHtmlTag;


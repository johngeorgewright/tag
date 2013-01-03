var OpenHtmlTag = require('./open'),
    HtmlTag     = require('./'),
    util        = require('util');

function QHtmlTag(content, attrs){
  OpenHtmlTag.call(this, 'q', content, attrs);
}

util.inherits(QHtmlTag, OpenHtmlTag);

QHtmlTag.attrs = {
  cite : HtmlTag.STRING
};

module.exports = QHtmlTag;


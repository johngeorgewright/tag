var OpenHtmlTag = require('./open'),
    HtmlTag     = require('./'),
    util        = require('util');

function DivHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'div', attrs, content);
}

util.inherits(DivHtmlTag, OpenHtmlTag);

DivHtmlTag.attrs = {
  align : ['left', 'right', 'center', 'justify']
};

module.exports = DivHtmlTag;


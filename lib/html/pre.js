var OpenHtmlTag = require('./open'),
    HtmlTag     = require('./'),
    util        = require('util');

function PreHtmlTag(content, attrs){
  OpenHtmlTag.call(this, 'pre', content, attrs);
}

util.inherits(PreHtmlTag, OpenHtmlTag);

PreHtmlTag.attrs = {
  width : HtmlTag.NUMBER
};

module.exports = PreHtmlTag;


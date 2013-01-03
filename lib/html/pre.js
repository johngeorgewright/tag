var OpenHtmlTag = require('./open'),
    HtmlTag     = require('./'),
    util        = require('util');

function PreHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'pre', attrs, content);
}

util.inherits(PreHtmlTag, OpenHtmlTag);

PreHtmlTag.attrs = {
  width : HtmlTag.NUMBER
};

module.exports = PreHtmlTag;


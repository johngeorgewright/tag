var OpenHtmlTag = require('./open'),
    HtmlTag     = require('./'),
    util        = require('util');

function CanvasHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'canvas', attrs, content);
}

util.inherits(CanvasHtmlTag, OpenHtmlTag);

CanvasHtmlTag.attrs = {
  height : HtmlTag.NUMBER,
  width  : HtmlTag.NUMBER
};

module.exports = CanvasHtmlTag;


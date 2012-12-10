var OpenHtmlTag = require('./open'),
    HtmlTag     = require('./'),
    util        = require('util');

function FrameHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'frame', attrs, content);
}

util.inherits(FrameHtmlTag, OpenHtmlTag);

FrameHtmlTag.attrs = {
  frameborder  : [0, 1],
  longdesc     : HtmlTag.STRING,
  marginheight : HtmlTag.NUMBER,
  marginwidth  : HtmlTag.NUMBER,
  name         : HtmlTag.STRING,
  noresize     : HtmlTag.BOOLEAN,
  scrolling    : ['yes', 'no', 'auto'],
  src          : HtmlTag.STRING
};

module.exports = FrameHtmlTag;


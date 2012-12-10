var OpenHtmlTag = require('./open'),
    HtmlTag     = require('./'),
    util        = require('util');

function FrameSetHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'frameset', attrs, content);
}

util.inherits(FrameSetHtmlTag, OpenHtmlTag);

FrameSetHtmlTag.attrs = {
  cols : HtmlTag.STRING,
  rows : HtmlTag.STRING
};

module.exports = FrameSetHtmlTag;


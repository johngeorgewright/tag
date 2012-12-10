var OpenHtmlTag = require('./open'),
    util        = require('util');

function CaptionHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'caption', attrs, content);
}

util.inherits(CaptionHtmlTag, OpenHtmlTag);

CaptionHtmlTag.attrs = {
  align : ['left', 'right', 'top', 'bottom']
};

module.exports = CaptionHtmlTag;


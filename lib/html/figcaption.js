var OpenHtmlTag = require('./open'),
    util        = require('util');

function FigCaptionHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'figcaption', attrs, content);
}

util.inherits(FigCaptionHtmlTag, OpenHtmlTag);

module.exports = FigCaptionHtmlTag;


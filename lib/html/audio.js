var HtmlTag     = require('./'),
    OpenHtmlTag = require('./open'),
    util        = require('util');

function AudioHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'audio', attrs, content);
}

util.inherits(AudioHtmlTag, OpenHtmlTag);

AudioHtmlTag.attrs = {
  autoplay : HtmlTag.BOOLEAN,
  controls : HtmlTag.BOOLEAN,
  loop     : HtmlTag.BOOLEAN,
  preload  : HtmlTag.BOOLEAN,
  src      : HtmlTag.STRING
};

module.exports = AudioHtmlTag;


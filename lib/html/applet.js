var HtmlTag     = require('./'),
    OpenHtmlTag = require('./open'),
    util        = require('util');

function AppletHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'applet', attrs, content);
}

util.inherits(AppletHtmlTag, OpenHtmlTag);

AppletHtmlTag.attrs = {
  code     : HtmlTag.STRING,
  object   : HtmlTag.STRING,
  align    : ['left', 'right', 'top', 'bottom', 'middle', 'baseline'],
  alt      : HtmlTag.STRING,
  archive  : HtmlTag.STRING,
  codebase : HtmlTag.STRING,
  height   : HtmlTag.NUMBER,
  hspace   : HtmlTag.NUMBER,
  name     : HtmlTag.STRING,
  vspace   : HtmlTag.NUMBER,
  width    : HtmlTag.NUMBER
};

module.exports = AppletHtmlTag;


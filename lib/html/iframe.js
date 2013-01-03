var OpenHtmlTag = require('./open'),
    HtmlTag     = require('./'),
    util        = require('util');
    
function IFrameHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'iframe', attrs, content);
}

util.inherits(IFrameHtmlTag, OpenHtmlTag);

IFrameHtmlTag.attrs = {
  align        : ['top', 'right', 'bottom', 'left', 'middle'],
  frameborder  : [0, 1],
  height       : HtmlTag.NUMBER,
  longdesc     : HtmlTag.STRING,
  marginheight : HtmlTag.NUMBER,
  marginwidth  : HtmlTag.NUMBER,
  name         : HtmlTag.STRING,
  sandbox      : ['', 'allow-forms', 'allow-same-origin', 'allow-scripts', 'allow-top-navigation'],
  scrolling    : ['yes', 'no', 'auto'],
  seamless     : HtmlTag.BOOLEAN,
  src          : HtmlTag.STRING,
  srcdoc       : HtmlTag.STRING,
  width        : HtmlTag.NUMBER
};

module.exports = IFrameHtmlTag;

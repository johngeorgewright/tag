var ClosedHtmlTag = require('./closed'),
    HtmlTag       = require('./'),
    util          = require('util');
    
function KeyGenHtmlTag(attrs){
  ClosedHtmlTag.call(this, attrs);
}

util.inherits(KeyGenHtmlTag, ClosedHtmlTag);

KeyGenHtmlTag.attrs = {
  autofocus : HtmlTag.BOOLEAN,
  challenge : HtmlTag.BOOLEAN,
  disabled  : HtmlTag.BOOLEAN,
  form      : HtmlTag.STRING,
  keytype   : ['rsa', 'dsa', 'ec'],
  name      : HtmlTag.STRING
};

module.exports = KeyGenHtmlTag;

var ClosedHtmlTag = require('./closed'),
    HtmlTag       = require('./'),
    util          = require('util');

function MetaHtmlTag(attrs){
  ClosedHtmlTag.call(this, 'meta', attrs);
}

util.inherits(MetaHtmlTag, ClosedHtmlTag);

MetaHtmlTag.attrs = {
  chrset       : HtmlTag.STRING,
  content      : HtmlTag.STRING,
  'http-equiv' : ['content-type', 'default-style', 'refresh'],
  name         : ['application-name', 'author', 'description', 'generator', 'keywords'],
  scheme       : HtmlTag.STRING
};

module.exports = MetaHtmlTag;


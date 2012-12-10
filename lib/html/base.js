var HtmlTag       = require('./'),
    ClosedHtmlTag = require('./closed'),
    util          = require('util');

function BaseHtmlTag(attrs){
  ClosedHtmlTag.call(this, 'base', attrs);
}

util.inherits(BaseHtmlTag, ClosedHtmlTag);

BaseHtmlTag.attrs = {
  href   : HtmlTag.STRING,
  target : HtmlTag.STRING
};

module.exports = BaseHtmlTag;


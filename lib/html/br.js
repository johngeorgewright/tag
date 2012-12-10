var ClosedHtmlTag = require('./closed'),
    HtmlTag       = require('./'),
    util          = require('util');

function BrHtmlTag(attrs){
  ClosedHtmlTag.call(this, 'br', attrs);
}

util.inherits(BrHtmlTag, ClosedHtmlTag);

module.exports = BrHtmlTag;


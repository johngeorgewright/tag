var ClosedHtmlTag = require('./open'),
    HtmlTag       = require('./'),
    util          = require('util');

function SourceHtmlTag(attrs){
  ClosedHtmlTag.call(this, 'source', attrs);
}

util.inherits(SourceHtmlTag, ClosedHtmlTag);

SourceHtmlTag.attrs = {
  media : HtmlTag.STRING,
  src   : HtmlTag.STRING,
  type  : HtmlTag.STRING
};

module.exports = SourceHtmlTag;


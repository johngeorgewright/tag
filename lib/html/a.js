var HtmlTag     = require('./'),
    OpenHtmlTag = require('./open'),
    util        = require('util');

function AHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'a', attrs, content);
}

util.inherits(AHtmlTag, OpenHtmlTag);

AHtmlTag.attrs = {
  charset  : HtmlTag.STRING,
  coords   : HtmlTag.STRING,
  href     : HtmlTag.STRING,
  hreflang : HtmlTag.STRING,
  media    : HtmlTag.STRING,
  name     : HtmlTag.STRING,
  rel      : ['alternate', 'author', 'bookmark', 'help', 'license', 'next', 'nofollow', 'noreferrer', 'prefetch', 'prev', 'search', 'tag'],
  rev      : HtmlTag.STRING,
  shape    : ['default', 'rect', 'circle', 'poly'],
  target   : HtmlTag.STRING,
  type     : HtmlTag.STRING
};

module.exports = AHtmlTag;


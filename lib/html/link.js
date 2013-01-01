var ClosedHtmlTag = require('./closed'),
    HtmlTag       = require('./'),
    util          = require('util');

function LinkHtmlTag(attrs){
  ClosedHtmlTag.call(this, 'link', attrs);
}

util.inherits(LinkHtmlTag, ClosedHtmlTag);

LinkHtmlTag.attrs = {
  charset  : HtmlTag.STRING,
  href     : HtmlTag.STRING,
  hreflang : HtmlTag.STRING,
  media    : HtmlTag.STRING,
  rel      : ['alternate', 'archives', 'author', 'bookmark', 'external', 'first', 'help', 'icon', 'last', 'license', 'next', 'nofollow', 'noreferrer', 'pingback', 'prefetch', 'prev', 'search', 'sidebar', 'stylesheet', 'tag', 'up'],
  rev      : HtmlTag.STRING,
  sizes    : HtmlTag.STRING,
  target   : HtmlTag.STRING,
  type     : HtmlTag.STRING
};

module.exports = LinkHtmlTag;


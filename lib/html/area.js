var HtmlTag     = require('./'),
    OpenHtmlTag = require('./open'),
    util        = require('util');

function AreaHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'area', attrs, content);
}

util.inherits(AreaHtmlTag, OpenHtmlTag);

AreaHtmlTag.attrs = {
  alt      : HtmlTag.STRING,
  coords   : HtmlTag.STRING,
  href     : HtmlTag.STRING,
  hreflang : HtmlTag.STRING,
  media    : HtmlTag.STRING,
  nohref   : HtmlTag.BOOLEAN,
  rel      : ['alternate', 'author', 'bookmark', 'help', 'license', 'next', 'nofollow', 'noreferrer', 'prefetch', 'prev', 'search', 'tag'],
  shape    : ['default', 'rect', 'circle', 'poly'],
  target   : HtmlTag.STRING,
  type     : HtmlTag.STRING
};

module.exports = AreaHtmlTag;


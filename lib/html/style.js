var OpenHtmlTag = require('./open'),
    HtmlTag     = require('./'),
    util        = require('util');

function StyleHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'style', attrs, content);
}

util.inherits(StyleHtmlTag, OpenHtmlTag);

StyleHtmlTag.attrs = {
  media  : HtmlTag.STRING,
  scoped : HtmlTag.BOOLEAN,
  type   : HtmlTag.STRING
};

module.exports = StyleHtmlTag;


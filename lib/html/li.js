var OpenHtmlTag = require('./open'),
    HtmlTag     = require('./'),
    util        = require('util');

function LiHtmlTag(content, attrs){
  OpenHtmlTag.call(this, 'li', content, attrs);
}

util.inherits(LiHtmlTag, OpenHtmlTag);

LiHtmlTag.attrs = {
  type  : [1, 'A', 'a', 'I', 'i', 'disc', 'square', 'circle'],
  value : HtmlTag.NUMBER
};

module.exports = LiHtmlTag;


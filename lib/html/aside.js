var OpenHtmlTag = require('./open'),
    util        = require('util');

function AsideHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'aside', attrs, content);
}

util.inherits(AsideHtmlTag, OpenHtmlTag);

module.exports = AsideHtmlTag;


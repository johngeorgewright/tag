var OpenHtmlTag = require('./open'),
    util        = require('util');

function FooterHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'footer', attrs, content);
}

util.inherits(FooterHtmlTag, OpenHtmlTag);

module.exports = FooterHtmlTag;


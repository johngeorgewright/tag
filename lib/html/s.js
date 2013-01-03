var OpenHtmlTag = require('./open'),
    util        = require('util');

function SHtmlTag(content, attrs){
  OpenHtmlTag.call(this, 'rp', content, attrs);
}

util.inherits(SHtmlTag, OpenHtmlTag);

module.exports = SHtmlTag;


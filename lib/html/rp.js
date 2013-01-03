var OpenHtmlTag = require('./open'),
    util        = require('util');

function RpHtmlTag(content, attrs){
  OpenHtmlTag.call(this, 'rp', content, attrs);
}

util.inherits(RpHtmlTag, OpenHtmlTag);

module.exports = RpHtmlTag;


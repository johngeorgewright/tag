var OpenHtmlTag = require('./open'),
    util        = require('util');

function RtHtmlTag(content, attrs){
  OpenHtmlTag.call(this, 'rp', content, attrs);
}

util.inherits(RtHtmlTag, OpenHtmlTag);

module.exports = RtHtmlTag;


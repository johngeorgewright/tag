var OpenHtmlTag = require('./open'),
    util        = require('util');

function SampHtmlTag(content, attrs){
  OpenHtmlTag.call(this, 'rp', content, attrs);
}

util.inherits(SampHtmlTag, OpenHtmlTag);

module.exports = SampHtmlTag;


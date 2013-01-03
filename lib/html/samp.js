var OpenHtmlTag = require('./open'),
    util        = require('util');

function SampHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'samp', attrs, content);
}

util.inherits(SampHtmlTag, OpenHtmlTag);

module.exports = SampHtmlTag;


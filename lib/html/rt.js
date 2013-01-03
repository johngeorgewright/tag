var OpenHtmlTag = require('./open'),
    util        = require('util');

function RtHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'rt', attrs, content);
}

util.inherits(RtHtmlTag, OpenHtmlTag);

module.exports = RtHtmlTag;


var ClosedHtmlTag = require('./open'),
    util          = require('util');

function BigHtmlTag(attrs, content){
  ClosedHtmlTag.call(this, attrs, content);
}

util.inherits(BigHtmlTag, ClosedHtmlTag);

module.exports = BigHtmlTag;


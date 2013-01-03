var OpenHtmlTag = require('./open'),
    util        = require('util');

function RpHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'rp', attrs, content);
}

util.inherits(RpHtmlTag, OpenHtmlTag);

module.exports = RpHtmlTag;


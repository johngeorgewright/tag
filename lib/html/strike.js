var OpenHtmlTag = require('./open'),
    util        = require('util');

function StrikeHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'strike', attrs, content);
}

util.inherits(StrikeHtmlTag, OpenHtmlTag);

module.exports = StrikeHtmlTag;


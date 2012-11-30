var OpenHtmlTag = require('./open'),
    util        = require('util');

function AcronymHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'acronym', attrs, content);
}

util.inherits(AcronymHtmlTag, OpenHtmlTag);

module.exports = AcronymHtmlTag;


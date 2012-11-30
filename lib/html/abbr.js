var util        = require('util'),
    OpenHtmlTag = require('./open');

function AbbrHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'abbr', attrs, content);
}

util.inherits(AbbrHtmlTag, OpenHtmlTag);

module.exports = AbbrHtmlTag;


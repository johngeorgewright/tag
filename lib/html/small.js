var OpenHtmlTag = require('./open'),
    util        = require('util');

function SmallHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'small', attrs, content);
}

util.inherits(SmallHtmlTag, OpenHtmlTag);

module.exports = SmallHtmlTag;


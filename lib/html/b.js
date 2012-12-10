var OpenHtmlTag = require('./open'),
    util        = require('util');

function BHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'b', attrs, content);
}

util.inherits(BHtmlTag, OpenHtmlTag);

module.exports = BHtmlTag;


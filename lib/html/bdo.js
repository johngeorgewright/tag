var OpenHtmlTag = require('./open'),
    util        = require('util');

function BdoHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'bdo', attrs, content);
}

util.inherits(BdoHtmlTag, OpenHtmlTag);

module.exports = BdoHtmlTag;


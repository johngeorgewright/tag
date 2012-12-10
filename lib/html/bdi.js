var OpenHtmlTag = require('./open'),
    util        = require('util');

function BdiHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'bdi', attrs, content);
}

util.inherits(BdiHtmlTag, OpenHtmlTag);

module.exports = BdiHtmlTag;


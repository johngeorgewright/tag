var OpenHtmlTag = require('./open'),
    util        = require('util');

function DdHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'dd', attrs, content);
}

util.inherits(DdHtmlTag, OpenHtmlTag);

module.exports = DdHtmlTag;


var OpenHtmlTag = require('./open'),
    util        = require('util');

function DlHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'dl', attrs, content);
}

util.inherits(DlHtmlTag, OpenHtmlTag);

module.exports = DlHtmlTag;


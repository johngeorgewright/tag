var OpenHtmlTag = require('./open'),
    util        = require('util');

function DtHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'dt', attrs, content);
}

util.inherits(DtHtmlTag, OpenHtmlTag);

module.exports = DtHtmlTag;


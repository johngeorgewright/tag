var OpenHtmlTag = require('./open'),
    util        = require('util');

function MarkHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'mark', attrs, content);
}

util.inherits(MarkHtmlTag, OpenHtmlTag);

module.exports = MarkHtmlTag;


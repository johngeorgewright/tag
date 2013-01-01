var OpenHtmlTag = require('./open'),
    util        = require('util');

function MarkHtmlTag(content, attrs){
  OpenHtmlTag.call(this, 'mark', content, attrs);
}

util.inherits(MarkHtmlTag, OpenHtmlTag);

module.exports = MarkHtmlTag;


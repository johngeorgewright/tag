var OpenHtmlTag = require('./open'),
    util        = require('util');

function CodeHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'code', attrs, content);
}

util.inherits(CodeHtmlTag, OpenHtmlTag);

module.exports = CodeHtmlTag;


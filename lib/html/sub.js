var OpenHtmlTag = require('./open'),
    util        = require('util');

function SubHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'sub', attrs, content);
}

util.inherits(SubHtmlTag, OpenHtmlTag);

module.exports = SubHtmlTag;


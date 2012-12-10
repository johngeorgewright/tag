var OpenHtmlTag = require('./open'),
    util        = require('util');

function DfnHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'dfn', attrs, content);
}

util.inherits(DfnHtmlTag, OpenHtmlTag);

module.exports = DfnHtmlTag;


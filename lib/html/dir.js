var OpenHtmlTag = require('./open'),
    HtmlTag     = require('./'),
    util        = require('util');

function DirHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'dir', attrs, content);
}

util.inherits(DirHtmlTag, OpenHtmlTag);

DirHtmlTag.attrs = {
  compact : HtmlTag.BOOLEAN
};

module.exports = DirHtmlTag;


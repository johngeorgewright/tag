var OpenHtmlTag = require('./open'),
    HtmlTag     = require('./'),
    util        = require('util');

function DetailsHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'details', attrs, content);
}

util.inherits(DetailsHtmlTag, OpenHtmlTag);

DetailsHtmlTag.attrs = {
  open : HtmlTag.BOOLEAN
};

module.exports = DetailsHtmlTag;


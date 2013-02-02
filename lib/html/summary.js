var OpenHtmlTag = require('./open'),
    HtmlTag     = require('./'),
    util        = require('util');

function SummaryHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'summary', attrs, content);
}

util.inherits(SummaryHtmlTag, OpenHtmlTag);

module.exports = SummaryHtmlTag;


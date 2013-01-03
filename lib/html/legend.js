var OpenHtmlTag = require('./open'),
    HtmlTag     = require('./'),
    util        = require('util');

function LegendHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'legend', attrs, content);
}

util.inherits(LegendHtmlTag, OpenHtmlTag);

LegendHtmlTag.attrs = {
  align: ['top', 'bottom', 'left', 'right']
};

module.exports = LegendHtmlTag;


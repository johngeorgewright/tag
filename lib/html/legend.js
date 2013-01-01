var OpenHtmlTag = require('./open'),
    HtmlTag     = require('./'),
    util        = require('util');

function LegendHtmlTag(content, attrs){
  OpenHtmlTag.call(this, 'legend', content, attrs);
}

util.inherits(LegendHtmlTag, OpenHtmlTag);

LegendHtmlTag.attrs = {
  align: ['top', 'bottom', 'left', 'right']
};

module.exports = LegendHtmlTag;


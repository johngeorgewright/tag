var OpenHtmlTag = require('./open'),
    HtmlTag     = require('./'),
    util        = require('util');

function MeterHtmlTag(content, attrs){
  OpenHtmlTag.call(this, 'meter', content, attrs);
}

util.inherits(MeterHtmlTag, OpenHtmlTag);

MeterHtmlTag.attrs = {
  form    : HtmlTag.STRING,
  high    : HtmlTag.NUMBER,
  low     : HtmlTag.NUMBER,
  max     : HtmlTag.NUMBER,
  min     : HtmlTag.NUMBER,
  optimum : HtmlTag.NUMBER,
  value   : HtmlTag.NUMBER
};

module.exports = MeterHtmlTag;


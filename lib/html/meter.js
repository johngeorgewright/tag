var OpenHtmlTag = require('./open'),
    HtmlTag     = require('./'),
    util        = require('util');

function MeterHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'meter', attrs, content);
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


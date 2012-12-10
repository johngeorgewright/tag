var OpenHtmlTag = require('./open'),
    HtmlTag     = require('./'),
    util        = require('util');

function FormHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'form', attrs, content);
}

util.inherits(FormHtmlTag, OpenHtmlTag);

FormHtmlTag.attrs = {
  accept : HtmlTag.STRING,
  'accept-charset' : HtmlTag.STRING,
  action           : HtmlTag.STRING,
  autocomplete     : ['on', 'off'],
  enctype          : ['application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain'],
  method           : ['get', 'post'],
  name             : HtmlTag.STRING,
  novalidate       : HtmlTag.BOOLEAN,
  target           : HtmlTag.STRING
};

module.exports = FormHtmlTag;


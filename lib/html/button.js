var OpenHtmlTag = require('./open'),
    HtmlTag     = require('./'),
    util        = require('util');

function ButtonHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'button', attrs, content);
}

util.inherits(ButtonHtmlTag, OpenHtmlTag);

ButtonHtmlTag.attrs = {
  autofocus      : HtmlTag.BOOLEAN,
  disabled       : HtmlTag.BOOLEAN,
  form           : HtmlTag.STRING,
  formaction     : HtmlTag.STRING,
  formenctype    : ['application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain'],
  formmethod     : ['get', 'post'],
  formnovalidate : HtmlTag.BOOLEAN,
  formtarget     : HtmlTag.STRING,
  name           : HtmlTag.STRING,
  type           : ['button', 'reset', 'submit'],
  value          : HtmlTag.STRING
};

module.exports = ButtonHtmlTag;


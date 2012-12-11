var ClosedHtmlTag = require('./closed'),
    HtmlTag       = require('./'),
    util          = require('util');
    
function InputHtmlTag(attrs){
  ClosedHtmlTag.call(this, 'input', attrs);
}

util.inherits(InputHtmlTag, ClosedHtmlTag);

InputHtmlTag.attrs = {
  accept         : HtmlTag.STRING,
  align          : ['left', 'right', 'top', 'middle', 'bottom'],
  alt            : HtmlTag.STRING,
  autocomplete   : ['on', 'off'],
  autofocus      : HtmlTag.BOOLEAN,
  checked        : HtmlTag.BOOLEAN,
  disabled       : HtmlTag.BOOLEAN,
  form           : HtmlTag.STRING,
  formaction     : HtmlTag.STRING,
  formenctype    : ['application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain'],
  formmethod     : ['get', 'post'],
  formnovalidate : HtmlTag.BOOLEAN,
  formtarget     : HtmlTag.STRING,
  height         : HtmlTag.NUMBER,
  list           : HtmlTag.STRING,
  max            : HtmlTag.STRING,
  maxlength      : HtmlTag.NUMBER,
  min            : HtmlTag.STRING,
  multiple       : HtmlTag.BOOLEAN,
  name           : HtmlTag.STRING,
  pattern        : HtmlTag.STRING,
  placeholder    : HtmlTag.STRING,
  readonly       : HtmlTag.BOOLEAN,
  required       : HtmlTag.BOOLEAN,
  size           : HtmlTag.NUMBER,
  src            : HtmlTag.STRING,
  step           : HtmlTag.NUMBER,
  type           : ['button', 'checkbox', 'color', 'date', 'datetime', 'datetime-local', 'email', 'file', 'hidden', 'image', 'month', 'number', 'password', 'radio', 'range', 'reset', 'search', 'submit', 'tel', 'text', 'time', 'url', 'week'],
  value          : HtmlTag.STRING,
  width          : HtmlTag.NUMBER
}

module.exports = InputHtmlTag;

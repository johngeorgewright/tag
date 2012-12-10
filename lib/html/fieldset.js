var OpenHtmlTag = require('./open'),
    HtmlTag     = require('./'),
    util        = require('util');

function FieldsetHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'fieldset', attrs, content);
}

util.inherits(FieldsetHtmlTag, OpenHtmlTag);

FieldsetHtmlTag.attrs = {
  disabled : HtmlTag.BOOLEAN,
  form     : HtmlTag.STRING,
  name     : HtmlTag.STRING
};

module.exports = FieldsetHtmlTag;


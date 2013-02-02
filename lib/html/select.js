var OpenHtmlTag = require('./open'),
    HtmlTag     = require('./'),
    util        = require('util');

function SelectHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'select', attrs, content);
}

util.inherits(SelectHtmlTag, OpenHtmlTag);

SelectHtmlTag.attrs = {
  autofocus : HtmlTag.BOOLEAN,
  disabled  : HtmlTag.BOOLEAN,
  form      : HtmlTag.STRING,
  multiple  : HtmlTag.BOOLEAN,
  name      : HtmlTag.STRING,
  size      : HtmlTag.NUMBER
};

module.exports = SelectHtmlTag;


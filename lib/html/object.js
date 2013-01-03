var OpenHtmlTag = require('./open'),
    HtmlTag     = require('./'),
    util        = require('util');

function ObjectHtmlTag(content, attrs){
  OpenHtmlTag.call(this, 'object', content, attrs);
}

util.inherits(ObjectHtmlTag, OpenHtmlTag);

ObjectHtmlTag.attrs = {
  align    : ['top', 'bottom', 'middle', 'left', 'right'],
  archive  : HtmlTag.STRING,
  border   : HtmlTag.NUMBER,
  classid  : HtmlTag.STRING,
  codebase : HtmlTag.STRING,
  data     : HtmlTag.STRING,
  declare  : HtmlTag.BOOLEAN,
  form     : HtmlTag.STRING,
  height   : HtmlTag.NUMBER,
  hspace   : HtmlTag.NUMBER,
  name     : HtmlTag.STRING,
  standby  : HtmlTag.STRING,
  type     : HtmlTag.STRING,
  usemap   : HtmlTag.STRING,
  vspace   : HtmlTag.NUMBER,
  width    : HtmlTag.NUMBER
};

module.exports = ObjectHtmlTag;


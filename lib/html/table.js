var OpenHtmlTag = require('./open'),
    HtmlTag     = require('./'),
    util        = require('util');

function TableHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'table', attrs, content);
}

util.inherits(TableHtmlTag, OpenHtmlTag);

TableHtmlTag.attrs = {
  align       : ['left', 'center', 'right'],
  bgcolor     : HtmlTag.STRING,
  border      : [0, 1],
  cellpadding : HtmlTag.NUMBER,
  cellspacing : HtmlTag.NUMBER,
  frame       : ['void', 'above', 'below', 'hsides', 'lhs', 'rhs', 'vsides', 'box', 'border'],
  rules       : ['none', 'groups', 'rows', 'cols', 'all'],
  summary     : HtmlTag.STRING,
  width       : HtmlTag.STRING
};

module.exports = TableHtmlTag;


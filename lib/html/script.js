var OpenHtmlTag = require('./open'),
    HtmlTag     = require('./'),
    util        = require('util');

function ScriptHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'script', attrs, content);
}

util.inherits(ScriptHtmlTag, OpenHtmlTag);

ScriptHtmlTag.attrs = {
  async       : HtmlTag.BOOLEAN,
  charset     : HtmlTag.STRING,
  defer       : HtmlTag.BOOLEAN,
  src         : HtmlTag.STRING,
  type        : HtmlTag.STRING,
  'xml:space' : ['preserve']
};

module.exports = ScriptHtmlTag;


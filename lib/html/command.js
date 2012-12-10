var OpenHtmlTag = require('./closed'),
    HtmlTag     = require('./'),
    util        = require('util');

function CommandHtmlTag(attrs){
  OpenHtmlTag.call(this, 'command', attrs);
}

util.inherits(CommandHtmlTag, HtmlTag);

CommandHtmlTag.attrs = {
  checked    : HtmlTag.BOOLEAN,
  disabled   : HtmlTag.BOOLEAN,
  icon       : HtmlTag.STRING,
  label      : HtmlTag.STRING,
  radiogroup : HtmlTag.STRING,
  type       : ['checkbox', 'command', 'radio']
};

module.exports = CommandHtmlTag;


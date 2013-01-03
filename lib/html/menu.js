var OpenHtmlTag = require('./open'),
    HtmlTag     = require('./'),
    util        = require('util');

function MenuHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'menu', attrs, content);
}

util.inherits(MenuHtmlTag, OpenHtmlTag);

MenuHtmlTag.attrs = {
  label : HtmlTag.STRING,
  type  : ['context', 'toolbar', 'list']
};

module.exports = MenuHtmlTag;


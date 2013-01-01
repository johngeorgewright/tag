var OpenHtmlTag = require('./open'),
    HtmlTag     = require('./'),
    util        = require('util');

function MenuHtmlTag(content, attrs){
  OpenHtmlTag.call(this, 'menu', content, attrs);
}

util.inherits(MenuHtmlTag, OpenHtmlTag);

MenuHtmlTag.attrs = {
  label : HtmlTag.STRING,
  type  : ['context', 'toolbar', 'list']
};

module.exports = MenuHtmlTag;


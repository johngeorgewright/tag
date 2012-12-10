var OpenHtmlTag = require('./open'),
    HtmlTag     = require('./'),
    util        = require('util');

function DelHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'del', attrs, content);
}

util.inherits(DelHtmlTag, OpenHtmlTag);

DelHtmlTag.attrs = {
  cite     : HtmlTag.STRING,
  datetime : HtmlTag.STRING
};

module.exports = DelHtmlTag;


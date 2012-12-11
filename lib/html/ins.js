var OpenHtmlTag = require('./open'),
    HtmlTag     = require('./'),
    util        = require('util');
    
function InsHtmlTag(attrs, content){
  OpenHtmlTag.call(this, attrs, content);
}

util.inherits(InsHtmlTag, OpenHtmlTag);

InsHtmlTag.attrs = {
  cite     : HtmlTag.STRING,
  datetime : HtmlTag.STRING
};

module.exports = InsHtmlTag;

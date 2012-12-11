var OpenHtmlTag = require('./open'),
    HtmlTag     = require('./'),
    util        = require('util');
    
function Html(attrs, content){
  OpenHtmlTag.call(this, 'html', attrs, content);
}

util.inherits(Html, OpenHtmlTag);

Html.attrs = {
  manifest : HtmlTag.STRING,
  xmlns    : HtmlTag.STRING
};

module.exports = Html;

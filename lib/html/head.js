var OpenHtmlTag = require('./open'),
    HtmlTag     = require('./'),
    util        = require('util');

function HeadHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'head', attrs, content);
}

util.inherits(HeadHtmlTag, OpenHtmlTag);

HeadHtmlTag.attrs = {
  profile : HtmlTag.STRING
};

module.exports = HeadHtmlTag;


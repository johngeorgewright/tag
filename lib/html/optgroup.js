var OpenHtmlTag = require('./open'),
    HtmlTag     = require('./'),
    util        = require('util');

function OptGroupHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'optgroup', attrs, content);
}

util.inherits(OptGroupHtmlTag, OpenHtmlTag);

OptGroupHtmlTag.attrs = {
  disabled : HtmlTag.BOOLEAN,
  label    : HtmlTag.STRING
};

module.exports = OptGroupHtmlTag;


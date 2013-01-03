var OpenHtmlTag = require('./open'),
    HtmlTag     = require('./'),
    util        = require('util');

function OptGroupHtmlTag(content, attrs){
  OpenHtmlTag.call(this, 'optgroup', content, attrs);
}

util.inherits(OptGroupHtmlTag, OpenHtmlTag);

OptGroupHtmlTag.attrs = {
  disabled : HtmlTag.BOOLEAN,
  label    : HtmlTag.STRING
};

module.exports = OptGroupHtmlTag;


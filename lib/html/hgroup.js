var OpenHtmlTag = require('./open'),
    util        = require('util');

function HGroupHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'hgroup', attrs, content);
}

util.inherits(HGroupHtmlTag, OpenHtmlTag);

module.exports = HGroupHtmlTag;


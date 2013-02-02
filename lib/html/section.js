var OpenHtmlTag = require('./open'),
    util        = require('util');

function SectionHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'section', attrs, content);
}

util.inherits(SectionHtmlTag, OpenHtmlTag);

module.exports = SectionHtmlTag;


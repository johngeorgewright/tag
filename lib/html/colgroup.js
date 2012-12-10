var OpenHtmlTag = require('./open'),
    ColHtmlTag  = require('./col'),
    util        = require('util');

function ColGroupHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'colgroup', attrs, content);
}

util.inherits(ColGroupHtmlTag, OpenHtmlTag);

ColGroupHtmlTag.attrs = util._extend({}, ColHtmlTag.attrs);

module.exports = ColGroupHtmlTag;


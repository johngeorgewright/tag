var OpenHtmlTag = require('./open'),
    util        = require('util');

function DataListHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'datalist', attrs, content);
}

util.inherits(DataListHtmlTag, OpenHtmlTag);

module.exports = DataListHtmlTag;


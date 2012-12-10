var OpenHtmlTag = require('./open'),
    util        = require('util');

function CiteHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'cite', attrs, content);
}

util.inherits(CiteHtmlTag, OpenHtmlTag);

module.exports = CiteHtmlTag;


var OpenHtmlTag = require('./open'),
    util        = require('util');
    
function IHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'i', attrs, content);
}

util.inherits(IHtmlTag, OpenHtmlTag);

module.exports = IHtmlTag;

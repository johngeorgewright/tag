var OpenHtmlTag = require('./open'),
    util        = require('util');
    
function IHtmlTag(content, attrs){
  OpenHtmlTag.call(this, 'i', content, attrs);
}

util.inherits(IHtmlTag, OpenHtmlTag);

module.exports = IHtmlTag;

var OpenHtmlTag = require('./open'),
    util        = require('util');
    
function KbdHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'kbd', attrs, content);
}

util.inherits(KbdHtmlTag, OpenHtmlTag);

module.exports = KbdHtmlTag;

var OpenHtmlTag = require('./open'),
    util        = require('util');
    
function HHtmlTag(attrs, content){
  var level = 1;
  
  if(typeof attrs === 'object' && attrs.level){
    level = attrs.level;
    delete attrs.level;
  }
  
  OpenHtmlTag.call(this, 'h' + level, attrs, content);
}

util.inherits(HHtmlTag, OpenHtmlTag);

HHtmlTag.attrs = {
  align: ['left', 'right', 'justify', 'center']
};

module.exports = HHtmlTag;
  
  
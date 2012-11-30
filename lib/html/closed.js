var HtmlTag = require('./'),
    util    = require('util');

function ClosedHtmlTag(name, attrs){
  HtmlTag.call(this, name, attrs);
}

util.inherits(ClosedHtmlTag, HtmlTag);

ClosedHtmlTag.prototype.toHTML = function(){
  var str   = '<' + this.name,
      attrs = this.formatAttrs();

  if(attrs.length > 0){
    str += ' ' + attrs;
  }

  str += ' />';
      
  return str;
};

module.exports = ClosedHtmlTag;


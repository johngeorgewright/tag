var HtmlTag  = require('./'),
    TextNode = require('./text'),
    util     = require('util');

function OpenHtmlTag(name, attrs, content){
  switch(typeof attrs){
    case 'boolean':
    case 'string':
      content = attrs;
      attrs   = {};
      break;

    case 'undefined':
      attrs = {};
      break;

    case 'object':
      break;

    default:
      throw new Error('The attributes must be in an object form.');
  }

  HtmlTag.call(this, name, attrs);

  this.children = [];
  
  if(content){
    this.appendChild(new TextNode(content));
  }
}

util.inherits(OpenHtmlTag, HtmlTag);

OpenHtmlTag.prototype.open = function(){
  var str   = '<' + this.name,
      attrs = this.formatAttrs();

  if(attrs.length > 0){
    str += ' ' + attrs;
  }

  str += '>';

  return str;
};

OpenHtmlTag.prototype.close = function(){
  return '</' + this.name + '>';
};

OpenHtmlTag.prototype.appendChild = function(el){
  this.children.push(el);
};

OpenHtmlTag.prototype.prependChild = function(el){
  this.children.unshift(el);
};

OpenHtmlTag.prototype.forEachChild = function(cb){
  this.children.forEach(cb);
};

OpenHtmlTag.prototype.insertBefore = function(search, el){
  var updatedChildren = [];

  this.forEachChild(function(child){
    if(child === search){
      updatedChildren.push(el);
    }

    updatedChildren.push(child);
  });

  this.children = updatedChildren;
};

OpenHtmlTag.prototype.insertAfter = function(search, el){
  var updatedChildren = [];

  this.forEachChild(function(child){
    updatedChildren.push(child);

    if(child === search){
      updatedChildren.push(el);
    }
  });

  this.children = updatedChildren;
};

OpenHtmlTag.prototype.toHTML = function(){
  var html = this.open();

  this.forEachChild(function(child){
    html += child.toHTML();
  });

  html += this.close();

  return html;
};

module.exports = OpenHtmlTag;


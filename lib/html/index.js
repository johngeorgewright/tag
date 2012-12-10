var util     = require('util'),
    TextNode = require('./text');

/**
 * A class representing a HTML element.
 *
 * @class HtmlTag
 * @module tag/html
 * @constructor
 * @param name {String} The tag name
 * @param attrs {Object} Optional key/value attrbiutes
 * @param content {String|Boolean} Content for the tag. If the tag is true it will be left open and empty. If it's false it will be closed.
 */
function HtmlTag(name, attrs){
  this.name = name;

  attrs = attrs || {};

  if(!(attrs instanceof Object)){
    throw new Error('The attributes must be in an object form.');
  }

  this.attrs = {};
  this.setAttrs(attrs);
}

/**
 * Sets a key/value object of attributes.
 *
 * @method setAttrs
 * @param attrs {Object}
 */
HtmlTag.prototype.setAttrs = function(attrs){
  var key;

  for(key in attrs){
    if(attrs.hasOwnProperty(key)){
      this.setAttr(key, attrs[key]);
    }
  }
};

/**
 * Gets the accepted definition of an attribute.
 *
 * @method getAttrDefinition
 * @param attr {String} The attribute's name
 * @return mixed
 */
HtmlTag.prototype.getAttrDefinition = function(attr){
  var ctr = this.constructor,
      def = ctr.attrs && ctr.attrs[attr];

  while(def === undefined && ctr.super_ !== undefined){
    ctr = ctr.super_;
    def = ctr.attrs && ctr.attrs[attr];
  }

  return def;
};

/**
 * Sets an attribute.
 *
 * @method setAttr
 * @param attr {String} The attribute's name
 * @param value {Mixed} The attribute's value
 */
HtmlTag.prototype.setAttr = function(attr, value){
  var type = this.getAttrDefinition(attr);

  if(typeof type === 'undefined'){
    throw new Error('Does not except the attribute ' + attr);
  }

  if(type === HtmlTag.STRING){
    this.attrs[attr] = typeof value === 'string' ? value : value.toString();
  }
  else if(type === HtmlTag.BOOLEAN){
    this.attrs[attr] = !!value;
  }
  else if(type === HtmlTag.NUMBER){
    this.attrs[attr] = parseInteger(value);
  }
  else if(util.isArray(type)){
    if(type.indexOf(value) >= 0){
      this.attrs[attr] = value;
    }
    else{
      throw new Error(attr + ' value cannot be ' + value);
    }
  }
};

HtmlTag.prototype.getAttr = function(attr, defaultValue){
  return this.attrs[attr] === undefined ? defaultValue : this.attrs[attr];
};

HtmlTag.prototype.hasClass = function(className){
  var cn   = this.getAttr('class', ''),
      reg1 = new RegExp('^' + className),
      reg2 = new RegExp('\s+' + className);

  return reg1.test(cn) || reg2.test(cn);
};

HtmlTag.prototype.addClass = function(className){
  var cn = this.getAttr('class', '');

  if(!this.hasClass(className)){
    if(cn.length > 0){
      cn += ' ';
    }
    cn += className;
    this.setAttr('class', cn);
  }
};

HtmlTag.prototype.removeClass = function(className){
  var cn   = this.getAttr('class', ''),
      reg1 = new RegExp('^' + className),
      reg2 = new RegExp('\s+' + className);

  cn = cn.replace(reg1).replace(reg2);
  this.setAttr('class', cn);
};

/**
 * Returns a formatted version of attributes ready
 * for a tag.
 *
 * @method formatAttrs
 * @return String
 */
HtmlTag.prototype.formatAttrs = function(){
  var str   = '',
      attrs = this.attrs,
      first = true,
      key;

  for(key in attrs){
    if(attrs.hasOwnProperty(key) && attrs[key]){
      if(!first){
        str += ' ';
      }

      str += key;

      if(attrs[key] !== true){
        str += '="' + attrs[key] + '"';
      }

      first = false;
    }
  }

  return str;
};

/**
 * Returns the tag as a HTML string.
 *
 * @method toHTML
 * @abstract
 * @return String
 */
HtmlTag.prototype.toHTML = function(){};

HtmlTag.STRING  = 'string';
HtmlTag.BOOLEAN = 'boolean';
HtmlTag.NUMBER  = 'number';

HtmlTag.attrs = {
  accesskey       : HtmlTag.STRING,
  'class'         : HtmlTag.STRING,
  contenteditable : HtmlTag.BOOLEAN,
  contextmenu     : HtmlTag.STRING,
  dir             : HtmlTag.STRING,
  draggable       : HtmlTag.BOOLEAN,
  dropzone        : ['copy', 'move', 'link'],
  hidden          : HtmlTag.BOOLEAN,
  id              : HtmlTag.STRING,
  lang            : HtmlTag.STRING,
  spellcheck      : HtmlTag.BOOLEAN,
  style           : HtmlTag.STRING,
  tabindex        : HtmlTag.NUMBER,
  title           : HtmlTag.STRING
};

HtmlTag.textNode = function(content){
  return new TextNode(content);
};

/**
 * Creates a HTML tag.
 *
 * @method factory
 * @param name {String} The tag name
 * @param attrs {Object} Key/value attributes
 * @param content {String} The tag's content
 * @return HtmlTag
 */
HtmlTag.factory = function(name, attrs, content){
  var tag, Cls, named = false;

  try{
    // Todo: Make a class for each element.
    Cls = require('./' + name);
    named = true;
  }
  catch(e){

    switch(name){
      case 'a':
      case 'abbr':
      case 'acronym':
      case 'address':
      case 'applet':
      case 'area':
      case 'article':
      case 'aside':
      case 'audio':
      case 'b':
      case 'base':
      case 'basefont':
      case 'bdi':
      case 'bdo':
      case 'big':
      case 'blockquote':
      case 'body':
      case 'button':
      case 'canvas':
      case 'caption':
      case 'center':
      case 'cite':
      case 'code':
      case 'colgroup':
      case 'command':
      case 'datalist':
      case 'dd':
      case 'details':
      case 'dfn':
      case 'dir':
      case 'div':
      case 'dl':
      case 'dt':
      case 'em':
      case 'fieldset':
      case 'figcaption':
      case 'figure':
      case 'font':
      case 'footer':
      case 'form':
      case 'frameset':
      case 'h1':
      case 'h2':
      case 'h3':
      case 'h4':
      case 'h5':
      case 'h6':
      case 'head':
      case 'header':
      case 'hgroup':
      case 'html':
      case 'i':
      case 'iframe':
      case 'ins':
      case 'kbd':
      case 'label':
      case 'li':
      case 'map':
      case 'milk':
      case 'menu':
      case 'meter':
      case 'nav':
      case 'noframes':
      case 'noscript':
      case 'ol':
      case 'optgroup':
      case 'option':
      case 'output':
      case 'p':
      case 'pre':
      case 'progress':
      case 'q':
      case 'rq':
      case 'rt':
      case 'ruby':
      case 's':
      case 'samp':
      case 'script':
      case 'section':
      case 'select':
      case 'small':
      case 'span':
      case 'strike':
      case 'strong':
      case 'style':
      case 'sub':
      case 'summary':
      case 'sup':
      case 'table':
      case 'tbody':
      case 'td':
      case 'textarea':
      case 'tfoot':
      case 'th':
      case 'thead':
      case 'time':
      case 'title':
      case 'tr':
      case 'tt':
      case 'u':
      case 'ul':
      case 'var':
      case 'video':
      case 'wbr':
        Cls = require('./open');
        break;

      case 'br':
      case 'col':
      case 'embed':
      case 'hr':
      case 'img':
      case 'input':
      case 'keygen':
      case 'link':
      case 'param':
      case 'track':
      default:
        Cls = require('./closed');
    }

  }

  return named ? new Cls(attrs, content) : new Cls(name, attrs, content);
};

module.exports = HtmlTag;


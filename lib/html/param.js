var ClosedHtmlTag = require('./closed'),
    HtmlTag       = require('./'),
    util          = require('util');

function ParamHtmlTag(attrs){
  ClosedHtmlTag.call(this, 'param', attrs);
}

util.inherits(ParamHtmlTag, ClosedHtmlTag);

ParamHtmlTag.attrs = {
  name      : HtmlTag.STRING,
  type      : HtmlTag.STRING,
  value     : HtmlTag.STRING,
  valuetype : ['data', 'ref', 'object']
};

module.exports = ParamHtmlTag;


var OpenHtmlTag = require('./open'),
    util        = require('util');

function FigureHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'figure', attrs, content);
}

util.inherits(FigureHtmlTag, OpenHtmlTag);

module.exports = FigureHtmlTag;


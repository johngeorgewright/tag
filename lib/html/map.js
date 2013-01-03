var OpenHtmlTag = require('./open'),
    HtmlTag     = require('./'),
    util        = require('util');

function MapHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'map', attrs, content);
}

util.inherits(MapHtmlTag, OpenHtmlTag);

MapHtmlTag.attrs = {
  name : HtmlTag.STRING
};

module.exports = MapHtmlTag;


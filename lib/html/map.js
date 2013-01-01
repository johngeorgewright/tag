var OpenHtmlTag = require('./open'),
    HtmlTag     = require('./'),
    util        = require('util');

function MapHtmlTag(content, attrs){
  OpenHtmlTag.call(this, 'map', content, attrs);
}

util.inherits(MapHtmlTag, OpenHtmlTag);

MapHtmlTag.attrs = {
  name : HtmlTag.STRING
};

module.exports = MapHtmlTag;


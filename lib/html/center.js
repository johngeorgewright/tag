var OpenHtmlTag = require('./open'),
    util        = require('util');

function CenterHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'center', attrs, content);
}

util.inherits(CenterHtmlTag, OpenHtmlTag);

module.exports = CenterHtmlTag;


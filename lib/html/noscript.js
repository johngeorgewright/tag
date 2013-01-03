var OpenHtmlTag = require('./open'),
    util        = require('util');

function NoScriptHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'noscript', attrs, content);
}

util.inherits(NoScriptHtmlTag, OpenHtmlTag);

module.exports = NoScriptHtmlTag;


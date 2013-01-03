var OpenHtmlTag = require('./open'),
    util        = require('util');

function NoScriptHtmlTag(content, attrs){
  OpenHtmlTag.call(this, 'noscript', content, attrs);
}

util.inherits(NoScriptHtmlTag, OpenHtmlTag);

module.exports = NoScriptHtmlTag;


var OpenHtmlTag = require('./open'),
    util        = require('util');

function RubyHtmlTag(content, attrs){
  OpenHtmlTag.call(this, 'rp', content, attrs);
}

util.inherits(RubyHtmlTag, OpenHtmlTag);

module.exports = RubyHtmlTag;


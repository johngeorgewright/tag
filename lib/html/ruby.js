var OpenHtmlTag = require('./open'),
    util        = require('util');

function RubyHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'ruby', attrs, content);
}

util.inherits(RubyHtmlTag, OpenHtmlTag);

module.exports = RubyHtmlTag;


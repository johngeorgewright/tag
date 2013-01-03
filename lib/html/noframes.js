var OpenHtmlTag = require('./open'),
    util        = require('util');

function NoFramesHtmlTag(content, attrs){
  OpenHtmlTag.call(this, 'noframes', content, attrs);
}

util.inherits(NoFramesHtmlTag, OpenHtmlTag);

module.exports = NoFramesHtmlTag;


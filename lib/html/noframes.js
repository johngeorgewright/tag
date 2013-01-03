var OpenHtmlTag = require('./open'),
    util        = require('util');

function NoFramesHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'noframes', attrs, content);
}

util.inherits(NoFramesHtmlTag, OpenHtmlTag);

module.exports = NoFramesHtmlTag;


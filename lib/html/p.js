var OpenHtmlTag = require('./open'),
    util        = require('util');

function PHtmlTag(content, attrs){
  OpenHtmlTag.call(this, 'p', content, attrs);
}

util.inherits(PHtmlTag, OpenHtmlTag);

PHtmlTag.attrs = {
  align : ['left', 'right', 'center', 'justify']
};

module.exports = PHtmlTag;


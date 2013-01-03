var OpenHtmlTag = require('./open'),
    util        = require('util');

function PHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'p', attrs, content);
}

util.inherits(PHtmlTag, OpenHtmlTag);

PHtmlTag.attrs = {
  align : ['left', 'right', 'center', 'justify']
};

module.exports = PHtmlTag;


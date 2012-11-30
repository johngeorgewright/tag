var OpenHtmlTag = require('./open'),
    util        = require('util');

function AddressHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'address', attrs, content);
}

util.inherits(AddressHtmlTag, OpenHtmlTag);

module.exports = AddressHtmlTag;


var OpenHtmlTag = require('./open'),
    util        = require('util');

function ArticleHtmlTag(attrs, content){
  OpenHtmlTag.call(this, 'article', attrs, content);
}

util.inherits(ArticleHtmlTag, OpenHtmlTag);

module.exports = ArticleHtmlTag;


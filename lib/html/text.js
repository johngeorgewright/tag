function TextNode(content){
  this.content = content;
}

TextNode.prototype.toHTML = function(){
  return this.content;
};

module.exports = TextNode;


var HtmlTag     = require('../lib/html'),
    OpenHtmlTag = require('../lib/html/open'),
    TextNode    = require('../lib/html/text'),
    expect      = require('expect.js');

describe('HtmlTag', function(){

  describe('#getAttrDefinition()', function(){

    it('should return a definition of an attribute', function(){
      var tag = new HtmlTag('div');
      expect(tag.getAttrDefinition('id')).to.be(HtmlTag.attrs.id);
    });

    it('should return a parent\'s attribute definition if it is not defined', function(){
      var tag = new OpenHtmlTag('div');
      expect(tag.getAttrDefinition('id')).to.be(HtmlTag.attrs.id);
    });

  });

  describe('#setAttr()', function(){

    beforeEach(function(){
      this.tag = new OpenHtmlTag('div');
      this.tag.setAttr('id', 'mung');
    });

    it('should add the value to the attrs object', function(){
      expect(this.tag.attrs.id).to.be('mung');
    });

  });

  describe('#factory()', function(){

    it('should create a HtmlTag object', function(){
      expect(HtmlTag.factory('div')).to.be.a(HtmlTag);
    });

    describe('open tag with no attributes', function(){

      beforeEach(function(){
        this.tag = HtmlTag.factory('div');
      });

      it('should represent an empty, open tag', function(){
        expect(this.tag.toHTML()).to.be('<div></div>');
      });

    });

    describe('open tag with attributes', function(){

      beforeEach(function(){
        this.tag = HtmlTag.factory('div', {
          'class' : 'mung',
          id      : 'face'
        });
      });

      it('should represent an empty, open tag with attributes', function(){
        expect(this.tag.toHTML()).to.be('<div class="mung" id="face"></div>');
      });

    });

    describe('open tag with content', function(){

      beforeEach(function(){
        this.tag = HtmlTag.factory('div', 'mungface');
      });

      it('should represent a div with some content', function(){
        expect(this.tag.toHTML()).to.be('<div>mungface</div>');
      });

    });

  });

});

describe('OpenHtmlTag', function(){

  describe('#factory()', function(){

    beforeEach(function(){
      this.tag = HtmlTag.factory('div');
    });

    it('should return an OpenHtmlTag', function(){
      expect(this.tag).to.be.an(OpenHtmlTag);
    });

  });

  describe('#appendChild()', function(){

    beforeEach(function(){
      this.tag   = HtmlTag.factory('p');
      this.child = HtmlTag.factory('span');
      this.tag.appendChild(this.child);
    });

    it('should add a tag as a child', function(){
      expect(this.tag.children.length).to.be(1);
      expect(this.tag.children[0]).to.be(this.child);
    });

    it('should exist in the HTML output', function(){
      expect(this.tag.toHTML()).to.be('<p><span></span></p>');
    });

  });

  describe('#prependChild()', function(){

    beforeEach(function(){
      this.tag   = HtmlTag.factory('div', 'mungface');
      this.child = HtmlTag.factory('span');
      this.tag.prependChild(this.child);
    });

    it('should add at tag to the beginning of the children', function(){
      expect(this.tag.children.length).to.be(2);
      expect(this.tag.children[0]).to.be(this.child);
    });

    it('should exists in the HTML output', function(){
      expect(this.tag.toHTML()).to.be('<div><span></span>mungface</div>');
    });

  });

  describe('#insertBefore()', function(){

    beforeEach(function(){
      var child = HtmlTag.factory('span');
      this.tag  = HtmlTag.factory('div');
      this.text = new TextNode('mungface');
      this.tag.appendChild(this.text);
      this.tag.insertBefore(child, this.text);
    });

    it('should have inserted the text node before the span', function(){
      expect(this.tag.children[0]).to.be(this.text);
    });

  });

  describe('#insertAfter()', function(){

    beforeEach(function(){
      var child1 = HtmlTag.factory('span'),
          child2 = HtmlTag.factory('span');
      this.tag  = HtmlTag.factory('div');
      this.text = new TextNode('mungface');
      this.tag.appendChild(child1);
      this.tag.appendChild(child2);
      this.tag.insertAfter(child1, this.text);
    });

    it('should have inserted the text node after the 1st child', function(){
      expect(this.tag.children[1]).to.be(this.text);
    });

  });

});

describe('AHtmlTag', function(){

  var AHtmlTag = require('../lib/html/a');

  it('should be returned from the factory when asked for an "a" tag', function(){
    expect(HtmlTag.factory('a')).to.be.an(AHtmlTag);
  });

});

describe('AbbrHtmlTag', function(){

  var AbbrHtmlTag = require('../lib/html/abbr');

  it('should be returns from the factory when asked for an "abbr" tag', function(){
    expect(HtmlTag.factory('abbr')).to.be.an(AbbrHtmlTag);
  });

});

describe('AcronymHtmlTag', function(){

  var AcronymHtmlTag = require('../lib/html/acronym');

  it('should be returns from the factory when asked for an "acronym" tag', function(){
    expect(HtmlTag.factory('acronym')).to.be.an(AcronymHtmlTag);
  });

});

describe('AddressHtmlTag', function(){

  var AddressHtmlTag = require('../lib/html/address');

  it('should be returned from the factory when asked for an "address" tag', function(){
    expect(HtmlTag.factory('address')).to.be.an(AddressHtmlTag);
  });

});

describe('AppletHtmlTag', function(){

  var AppletHtmlTag = require('../lib/html/applet');

  it('should be returned from the factory when asked for an "applet" tag', function(){
    expect(HtmlTag.factory('applet')).to.be.an(AppletHtmlTag);
  });

});

describe('AreaHtmlTag', function(){

  var AreaHtmlTag = require('../lib/html/area');

  it('should be returned from the factory when asked for an "area" tag', function(){
    expect(HtmlTag.factory('area')).to.be.an(AreaHtmlTag);
  });

});

describe('ArticleHtmlTag', function(){

  var ArticleHtmlTag = require('../lib/html/article');

  it('should be returned from the factory when asked for an "article" tag', function(){
    expect(HtmlTag.factory('article')).to.be.an(ArticleHtmlTag);
  });

});

describe('AsideHtmlTag', function(){

  var AsideHtmlTag = require('../lib/html/aside');

  it('should be returned from the factory when asked for an "aside" tag', function(){
    expect(HtmlTag.factory('aside')).to.be.an(AsideHtmlTag);
  });

});


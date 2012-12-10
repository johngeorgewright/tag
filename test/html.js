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

describe('AudioHtmlTag', function(){

  var AudioHtmlTag = require('../lib/html/audio');

  it('should be returned from the factory when asked for an "audio" tag', function(){
    expect(HtmlTag.factory('audio')).to.be.an(AudioHtmlTag);
  });

});

describe('BHtmlTag', function(){

  var BHtmlTag = require('../lib/html/b');

  it('should be returned from the factory when asked for a "b" tag', function(){
    expect(HtmlTag.factory('b')).to.be.a(BHtmlTag);
  });

});

describe('BaseHtmlTag', function(){

  var BaseHtmlTag = require('../lib/html/base');

  it('should be returned from the factory when asked for a "base" tag', function(){
    expect(HtmlTag.factory('base')).to.be.a(BaseHtmlTag);
  });

});

describe('BaseFontHtmlTag', function(){

  var BaseFontHtmlTag = require('../lib/html/basefont');

  it('should be returned from the factory when asked for a "basefont" tag', function(){
    expect(HtmlTag.factory('basefont')).to.be.a(BaseFontHtmlTag);
  });

});

describe('BdiHtmlTag', function(){

  var BdiHtmlTag = require('../lib/html/bdi');

  it('should be returned from the factory when asked for a "bdi" tag', function(){
    expect(HtmlTag.factory('bdi')).to.be.a(BdiHtmlTag);
  });

});

describe('BdoHtmlTag', function(){

  var BdoHtmlTag = require('../lib/html/bdo');

  it('should be returned from the factory when asked for a "bdo" tag', function(){
    expect(HtmlTag.factory('bdo')).to.be.a(BdoHtmlTag);
  });

});

describe('BigHtmlTag', function(){

  var BigHtmlTag = require('../lib/html/big');

  it('should be returned from the factory when asked for a "big" tag', function(){
    expect(HtmlTag.factory('big')).to.be.a(BigHtmlTag);
  });

});

describe('BlockquoteHtmlTag', function(){

  var BlockQuoteHtmlTag = require('../lib/html/blockquote');

  it('should be returned from the factory when asked for a "blockquote" tag', function(){
    expect(HtmlTag.factory('blockquote')).to.be.a(BlockQuoteHtmlTag);
  });

});

describe('BodyHtmlTag', function(){

  var BodyHtmlTag = require('../lib/html/body');

  it('should be returned from the factory when asking for a "body" tag', function(){
    expect(HtmlTag.factory('body')).to.be.a(BodyHtmlTag);
  });

});

describe('BrHtmlTag', function(){

  var BrHtmlTag = require('../lib/html/br');

  it('should be returned from the factory when asked for a "br" tag', function(){
    expect(HtmlTag.factory('br')).to.be.a(BrHtmlTag);
  });

});

describe('ButtonHtmlTag', function(){

  var ButtonHtmlTag = require('../lib/html/button');

  it('should be returned from the factory when asked for a "button" tag', function(){
    expect(HtmlTag.factory('button')).to.be.a(ButtonHtmlTag);
  });

});

describe('CanvasHtmlTag', function(){

  var CanvasHtmlTag = require('../lib/html/canvas');

  it('should be returned from the factory when asked for a "canvas" tag', function(){
    expect(HtmlTag.factory('canvas')).to.be.a(CanvasHtmlTag);
  });

});

describe('CaptionHtmlTag', function(){

  var CaptionHtmlTag = require('../lib/html/caption');

  it('should be returned from the factory when asked for a "caption" tag', function(){
    expect(HtmlTag.factory('caption')).to.be.a(CaptionHtmlTag);
  });

});

describe('CenterHtmlTag', function(){

  var CenterHtmlTag = require('../lib/html/center');

  it('should be returned from the factory when asked for a "center" tag', function(){
    expect(HtmlTag.factory('center')).to.be.a(CenterHtmlTag);
  });

});

describe('CiteHtmlTag', function(){

  var CiteHtmlTag = require('../lib/html/cite');

  it('should be returned from the factory when asked for a "cite" tag', function(){
    expect(HtmlTag.factory('cite')).to.be.a(CiteHtmlTag);
  });

});

describe('CodeHtmlTag', function(){

  var CodeHtmlTag = require('../lib/html/code');

  it('should be returned from the factory when asked for a "code" tag', function(){
    expect(HtmlTag.factory('code')).to.be.a(CodeHtmlTag);
  });

});

describe('ColHtmlTag', function(){

  var ColHtmlTag = require('../lib/html/col');

  it('should be returned from the factory when asked for a "col" tag', function(){
    expect(HtmlTag.factory('col')).to.be.a(ColHtmlTag);
  });

});

describe('ColGroupHtmlTag', function(){

  var ColGroupHtmlTag = require('../lib/html/colgroup');

  it('should be returned from the factory when asked for a "colgroup" tag', function(){
    expect(HtmlTag.factory('colgroup')).to.be.a(ColGroupHtmlTag);
  });

});

describe('CommandHtmlTag', function(){

  var CommandHtmlTag = require('../lib/html/command');

  it('should be returned from the factory when asked for a "command" tag', function(){
    expect(HtmlTag.factory('command')).to.be.a(CommandHtmlTag);
  });

});

describe('DataListHtmlTag', function(){

  var DataListHtmlTag = require('../lib/html/datalist');

  it('should be returned from the factory when asked for a "datalist" tag', function(){
    expect(HtmlTag.factory('datalist')).to.be.a(DataListHtmlTag);
  });

});

describe('DdHtmlTag', function(){

  var DdHtmlTag = require('../lib/html/dd');

  it('should be returned from the factory when asked for a "dd" tag', function(){
    expect(HtmlTag.factory('dd')).to.be.a(DdHtmlTag);
  });

});

describe('DelHtmlTag', function(){

  var DelHtmlTag = require('../lib/html/del');

  it('should be returned from the factory when asked for a "del" tag', function(){
    expect(HtmlTag.factory('del')).to.be.a(DelHtmlTag);
  });

});

describe('DetailsHtmlTag', function(){

  var DetailsHtmlTag = require('../lib/html/details');

  it('should be returned from the factory when asked for a "details" tag', function(){
    expect(HtmlTag.factory('details')).to.be.a(DetailsHtmlTag);
  });

});

describe('DfnHtmlTag', function(){

  var DfnHtmlTag = require('../lib/html/dfn');

  it('should be returned from the factory when asked for a "dfn" tag', function(){
    expect(HtmlTag.factory('dfn')).to.be.a(DfnHtmlTag);
  });

});

describe('DirHtmlTag', function(){

  var DirHtmlTag = require('../lib/html/dir');

  it('should be returned from the factory when asked for a "dir" tag', function(){
    expect(HtmlTag.factory('dir')).to.be.a(DirHtmlTag);
  });

});

describe('DivHtmlTag', function(){

  var DivHtmlTag = require('../lib/html/div');

  it('should be returned from the factory when asked for a "div" tag', function(){
    expect(HtmlTag.factory('div')).to.be.a(DivHtmlTag);
  });

});

describe('DlHtmlTag', function(){

  var DlHtmlTag = require('../lib/html/dl');

  it('should be returned from the factory when asked for a "dl" tag', function(){
    expect(HtmlTag.factory('dl')).to.be.a(DlHtmlTag);
  });

});

describe('DtHtmlTag', function(){

  var DtHtmlTag = require('../lib/html/dt');

  it('should be returned from the factory when asked for a "dt" tag', function(){
    expect(HtmlTag.factory('dt')).to.be.a(DtHtmlTag);
  });

});

describe('EmHtmlTag', function(){

  var EmHtmlTag = require('../lib/html/em');

  it('should be returned from the factory when asked for an "em" tag', function(){
    expect(HtmlTag.factory('em')).to.be.an(EmHtmlTag);
  });

});

describe('EmbedHtmlTag', function(){

  var EmbedHtmlTag = require('../lib/html/embed');

  it('should be returned from the factory when asked for an "embed" tag', function(){
    expect(HtmlTag.factory('embed')).to.be.an(EmbedHtmlTag);
  });
  
});

describe('FieldsetHtmlTag', function(){

  var FieldsetHtmlTag = require('../lib/html/fieldset');

  it('shoulde be returned from the factory when asked for a "fieldset" tag', function(){
    expect(HtmlTag.factory('fieldset')).to.be.a(FieldsetHtmlTag);
  });
  
});

describe('FigCaptionHtmlTag', function(){

  var FigCaptionHtmlTag = require('../lib/html/figcaption');

  it('should be returned from the factory when asked for a "figcaption" tag', function(){
    expect(HtmlTag.factory('figcaption')).to.be.a(FigCaptionHtmlTag);
  });

});

describe('FigureHtmlTag', function(){

  var FigureHtmlTag = require('../lib/html/figure');

  it('should be returned from the factory when asked for a "figure" tag', function(){
    expect(HtmlTag.factory('figure')).to.be.a(FigureHtmlTag);
  });

});

describe('FontHtmlTag', function(){

  var FontHtmlTag = require('../lib/html/font');

  it('should be returned from the factory when asked for a "font" tag', function(){
    expect(HtmlTag.factory('font')).to.be.a(FontHtmlTag);
  });

});

describe('FooterHtmlTag', function(){

  var FooterHtmlTag = require('../lib/html/footer');

  it('should be returned from the factory when asked for a "footer" tag', function(){
    expect(HtmlTag.factory('footer')).to.be.a(FooterHtmlTag);
  });

});

describe('FormHtmlTag', function(){

  var FormHtmlTag = require('../lib/html/form');

  it('should be returned from the factory when asked for a "form" tag', function(){
    expect(HtmlTag.factory('form')).to.be.a(FormHtmlTag);
  });

});

describe('FrameHtmlTag', function(){

  var FrameHtmlTag = require('../lib/html/frame');

  it('should be returned from the factory when asked for a "frame" tag', function(){
    expect(HtmlTag.factory('frame')).to.be.a(FrameHtmlTag);
  });

});

describe('FrameSetHtmlTag', function(){

  var FrameSetHtmlTag = require('../lib/html/frameset');

  it('should be returned from the factory when asked for a "frameset" tag', function(){
    expect(HtmlTag.factory('frameset')).to.be.a(FrameSetHtmlTag);
  });

});

describe('HeadHtmlTag', function(){

  var HeadHtmlTag = require('../lib/html/head');

  it('should be returned from the factory when asked for a "head" tag', function(){
    expect(HtmlTag.factory('head')).to.be.a(HeadHtmlTag);
  });

});

describe('HeaderHtmlTag', function(){

  var HeaderHtmlTag = require('../lib/html/header');

  it('should be returned from the factory when asked for a "header" tag', function(){
    expect(HtmlTag.factory('header')).to.be.a(HeaderHtmlTag);
  });

});

describe('hgroup', function(){

  var HGroupHtmlTag = require('../lib/html/hgroup');

  it('should be returned from the factory when asked for a "hgroup" tag', function(){
    expect(HtmlTag.factory('hgroup')).to.be.a(HGroupHtmlTag);
  })

});

describe('h', function(){

  function h(level){
    var Header = require('../lib/html/h');

    it('should be returned from the factory when asked for a "h" tag', function(){
      expect(HtmlTag.factory('h', {level : level})).to.be.a(Header);
    });

  }

  for(i=1; i<=6; i++){
    h(i);
  }

});


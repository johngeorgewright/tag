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

describe('HGroupHtmlTag', function(){

  var HGroupHtmlTag = require('../lib/html/hgroup');

  it('should be returned from the factory when asked for a "hgroup" tag', function(){
    expect(HtmlTag.factory('hgroup')).to.be.a(HGroupHtmlTag);
  })

});

var Header = require('../lib/html/h');

function h(level){
  describe('H' + level + 'HtmlTag', function(){
    it('should be returned from the factory when asked for a "h" tag', function(){
      expect(HtmlTag.factory('h', {level : level})).to.be.a(Header);
    });
  });
}

for(i=1; i<=6; i++){
  h(i);
}

describe('HrHtmlTag', function(){

  var HrTag = require('../lib/html/hr');
  
  it('should be returned from the factory when asked for a "hr" tag', function(){
    expect(HtmlTag.factory('hr')).to.be.a(HrTag);
  });

});

describe('HtmlHtmlTag', function(){
  
  var HtmlHtmlTag = require('../lib/html/html');
  
  it('should be returned from the factory when asked for a "html" tag.', function(){
    expect(HtmlTag.factory('html')).to.be.a(HtmlHtmlTag);
  });
  
});

describe('IHtmlTag', function(){
  
  var IHtmlTag = require('../lib/html/i');
  
  it('should be returned from the factory when asked for an "i" tag', function(){
    expect(HtmlTag.factory('i')).to.be.an(IHtmlTag);
  });
  
});

describe('IFrameHtmlTag', function(){
  
  var IFrameHtmlTag = require('../lib/html/iframe');
  
  it('should be returned from the factory when asked for an "iframe" tag', function(){
    expect(HtmlTag.factory('iframe')).to.be.an(IFrameHtmlTag);
  });
  
});

describe('ImgHtmlTag', function(){
  
  var ImgHtmlTag = require('../lib/html/img');
  
  it('should be returned from the factory when asked for an "img" tag', function(){
    expect(HtmlTag.factory('img')).to.be.an(ImgHtmlTag);
  });
  
});

describe('InputHtmlTag', function(){
  
  var InputHtmlTag = require('../lib/html/input');
  
  it('should be returned from the factory when asked for an "input" tag', function(){
    expect(HtmlTag.factory('input')).to.be.an(InputHtmlTag);
  });
  
});

describe('InsHtmlTag', function(){
  
  var InsHtmlTag = require('../lib/html/ins');
  
  it('should be returned from the factory when asked for an "ins" tag', function(){
    expect(HtmlTag.factory('ins')).to.be.an(InsHtmlTag);
  });
  
});

describe('KbdHtmlTag', function(){
  
  var KbdHtmlTag = require('../lib/html/kbd');
  
  it('should be returned from the factory when asked for a "kbd" tag', function(){
    expect(HtmlTag.factory('kbd')).to.be.a(KbdHtmlTag);
  });
  
});

describe('KeyGenHtmlTag', function(){
  
  var KeyGenHtmlTag = require('../lib/html/keygen');
  
  it('should be returned from the factory when asked for a "keygen" tag', function(){
    expect(HtmlTag.factory('keygen')).to.be.a(KeyGenHtmlTag);
  });
  
});

describe('LabelHtmlTag', function(){

  var LabelHtmlTag = require('../lib/html/label');

  it('should be returned from the factory when asked for a "label" tag', function(){
    expect(HtmlTag.factory('label')).to.be.a(LabelHtmlTag);
  });

});

describe('LegendHtmlTag', function(){

  var LegendHtmlTag = require('../lib/html/legend');

  it('should be returned from the factory when asked for "legend" tag', function(){
    expect(HtmlTag.factory('legend')).to.be.a(LegendHtmlTag);
  });

});

describe('LiHtmlTag', function(){

  var LiHtmlTag = require('../lib/html/li');

  it('should be returned from the factory when asked for a "li" tag', function(){
    expect(HtmlTag.factory('li')).to.be.a(LiHtmlTag);
  });

});

describe('LinkHtmlTag', function(){

  var LinkHtmlTag = require('../lib/html/link');

  it('should be returned from the factory when asked for a "link" tag', function(){
    expect(HtmlTag.factory('link')).to.be.a(LinkHtmlTag);
  });

});

describe('MapHtmlTag', function(){

  var MapHtmlTag = require('../lib/html/map');

  it('should be returned from the factory when asked for a "map" tag', function(){
    expect(HtmlTag.factory('map')).to.be.a(MapHtmlTag);
  });

});

describe('MarkHtmlTag', function(){

  var MarkHtmlTag = require('../lib/html/mark');

  it('should be returned from the factory when asked for a "mark" tag', function(){
    expect(HtmlTag.factory('mark')).to.be.a(MarkHtmlTag);
  });

});

describe('MenuHtmlTag', function(){

  var MenuHtmlTag = require('../lib/html/menu');

  it('should be returned from the factoy when asked for "menu" tag', function(){
    expect(HtmlTag.factory('menu')).to.be.a(MenuHtmlTag);
  });

});

describe('MetaHtmlTag', function(){

  var MetaHtmlTag = require('../lib/html/meta');

  it('should be returned from the factory when asked for a "meta" tag', function(){
    expect(HtmlTag.factory('meta')).to.be.a(MetaHtmlTag);
  });

});

describe('MeterHtmlTag', function(){

  var MeterHtmlTag = require('../lib/html/meter');

  it('should be returned from the factory when asked for a "meter" tag', function(){
    expect(HtmlTag.factory('meter')).to.be.a(MeterHtmlTag);
  });

});

describe('NavHtmlTag', function(){

  var NavHtmlTag = require('../lib/html/nav');

  it('should be returned from the factory when asked for a "nav" tag', function(){
    expect(HtmlTag.factory('nav')).to.be.a(NavHtmlTag);
  });

});

describe('NoFramesHtmlTag', function(){

  var NoFramesHtmlTag = require('../lib/html/noframes');
  
  it('should be returned from the factory when asked for a "noframes" tag', function(){
    expect(HtmlTag.factory('noframes')).to.be.a(NoFramesHtmlTag);
  });

});

describe('NoScriptHtmlTag', function(){

  var NoScriptHtmlTag = require('../lib/html/noscript');

  it('should be returned from the factory when asked for a "noscript" tag', function(){
    expect(HtmlTag.factory('noscript')).to.be.a(NoScriptHtmlTag);
  });

});

describe('ObjectHtmlTag', function(){

  var ObjectHtmlTag = require('../lib/html/object');

  it('should be returned from the factory when asked for an "object" tag', function(){
    expect(HtmlTag.factory('object')).to.be.an(ObjectHtmlTag);
  });

});

describe('OlHtmlTag', function(){

  var OlHtmlTag = require('../lib/html/ol');

  it('should be returned from the factory when asked for an "ol" tag', function(){
    expect(HtmlTag.factory('ol')).to.be.an(OlHtmlTag);
  });

});

describe('OptGroupHtmlTag', function(){

  var OptGroupHtmlTag = require('../lib/html/optgroup');

  it('should be returned from the factory when asked foran "optgroup" tag', function(){
    expect(HtmlTag.factory('optgroup')).to.be.an(OptGroupHtmlTag);
  });

});

describe('OptonHtmlTag', function(){

  var OptionHtmlTag = require('../lib/html/option');

  it('should be returned from the factory when asked for an "option" tag', function(){
    expect(HtmlTag.factory('option')).to.be.an(OptionHtmlTag);
  });

});

describe('OutputHtmlTag', function(){

  var OutputHtmlTag = require('../lib/html/output');

  it('should be returned from the factory when asked for an "output" tag', function(){
    expect(HtmlTag.factory('output')).to.be.an(OutputHtmlTag);
  });

});

describe('PHtmlTag', function(){

  var PHtmlTag = require('../lib/html/p');

  it('should be returned from the factory when asked for a "p" tag', function(){
    expect(HtmlTag.factory('p')).to.be.a(PHtmlTag);
  });

});

describe('ParamHtmlTag', function(){

  var ParamHtmlTag = require('../lib/html/param');

  it('should be returned from the factory when asked for a "param" tag', function(){
    expect(HtmlTag.factory('param')).to.be.a(ParamHtmlTag);
  });

});

describe('PreHtmlTag', function(){

  var PreHtmlTag = require('../lib/html/pre');

  it('should be returned from the factory when asked for a "pre" tag', function(){
    expect(HtmlTag.factory('pre')).to.be.a(PreHtmlTag);
  });

});

describe('ProgressHtmlTag', function(){

  var ProgressHtmlTag = require('../lib/html/progress');

  it('should be returned from the factory when asked for a "progress" tag', function(){
    expect(HtmlTag.factory('progress')).to.be.a(ProgressHtmlTag);
  });

});

describe('QHtmlTag', function(){

  var QHtmlTag = require('../lib/html/q');

  it('should be returned from the factory when asked for a "q" tag', function(){
    expect(HtmlTag.factory('q')).to.be.a(QHtmlTag);
  });

});

describe('RpHtmlTag', function(){

  var RpHtmlTag = require('../lib/html/rp');

  it('should be returned from the factory when asked for a "rp" tag', function(){
    expect(HtmlTag.factory('rp')).to.be.a(RpHtmlTag);
  });

});

describe('RtHtmlTag', function(){

  var RtHtmlTag = require('../lib/html/rt');

  it('should be returned from the factory when asked for a "rt" tag', function(){
    expect(HtmlTag.factory('rt')).to.be.a(RtHtmlTag);
  });

});

describe('RubyHtmlTag', function(){

  var RubyHtmlTag = require('../lib/html/ruby');

  it('should be returned from the factory when asked for a "ruby" tag', function(){
    expect(HtmlTag.factory('ruby')).to.be.a(RubyHtmlTag);
  });

});

describe('SHtmlTag', function(){

  var SHtmlTag = require('../lib/html/s');

  it('should be returned from the factory when asked for a "s" tag', function(){
    expect(HtmlTag.factory('s')).to.be.a(SHtmlTag);
  });

});

describe('SampHtmlTag', function(){

  var SampHtmlTag = require('../lib/html/samp');

  it('should be returned from the factory when asked for a "samp" tag', function(){
    expect(HtmlTag.factory('samp')).to.be.a(SampHtmlTag);
  });

});

describe('ScriptHtmlTag', function(){

  var ScriptHtmlTag = require('../lib/html/script');

  it('should be returned from the factory when asked for a "script" tag', function(){
    expect(HtmlTag.factory('script')).to.be.a(ScriptHtmlTag);
  });

});

describe('SectionHtmlTag', function(){

  var SectionHtmlTag = require('../lib/html/section');

  it('should be returned from the factory when asked for a "section" tag', function(){
    expect(HtmlTag.factory('section')).to.be.a(SectionHtmlTag);
  });

});

describe('SelectHtmlTag', function(){

  var SelectHtmlTag = require('../lib/html/select');

  it('should be returned from the factory when asked for a "select" tag', function(){
    expect(HtmlTag.factory('select')).to.be.a(SelectHtmlTag);
  });

});

describe('SmallHtmlTag', function(){

  var SmallHtmlTag = require('../lib/html/small');

  it('should be returned from the factory when asked for a "small" tag', function(){
    expect(HtmlTag.factory('small')).to.be.a(SmallHtmlTag);
  });

});

describe('SourceHtmlTag', function(){

  var SourceHtmlTag = require('../lib/html/source');

  it('should be returned from the factory when asked for a "source" tag', function(){
    expect(HtmlTag.factory('source')).to.be.a(SourceHtmlTag);
  });

});

describe('SpanHtmlTag', function(){

  var SpanHtmlTag = require('../lib/html/span');

  it('should be returned from the factory when asked for a "span" tag', function(){
    expect(HtmlTag.factory('span')).to.be.a(SpanHtmlTag);
  });

});

describe('StrikeHtmlTag', function(){

  var StrikeHtmlTag = require('../lib/html/strike');

  it('should be returned from the factory when asked for a "strike" tag', function(){
    expect(HtmlTag.factory('strike')).to.be.a(StrikeHtmlTag);
  });

});

describe('StrongHtmlTag', function(){

  var StrongHtmlTag = require('../lib/html/strong');

  it('should be returned from the factory when asked for a "strong" tag', function(){
    expect(HtmlTag.factory('strong')).to.be.a(StrongHtmlTag);
  });

});

describe('StyleHtmlTag', function(){

  var StyleHtmlTag = require('../lib/html/style');

  it('should be returned from the factory when asked for a "style" tag', function(){
    expect(HtmlTag.factory('style')).to.be.a(StyleHtmlTag);
  });

});

describe('SubHtmlTag', function(){

  var SubHtmlTag = require('../lib/html/sub');

  it('should be returned from the factory when asked for a "sub" tag', function(){
    expect(HtmlTag.factory('sub')).to.be.a(SubHtmlTag);
  });

});

describe('SummaryHtmlTag', function(){

  var SummaryHtmlTag = require('../lib/html/summary');

  it('should be returned from the factory when asked for a "summary" tag', function(){
    expect(HtmlTag.factory('summary')).to.be.a(SummaryHtmlTag);
  });

});

describe('TableHtmlTag', function(){

  var TableHtmlTag = require('../lib/html/table');

  it('should be returned from the factory when asked for a "table" tag', function(){
    expect(HtmlTag.factory('table')).to.be.a(TableHtmlTag);
  });

});

describe('TBodyHtmlTag', function(){

  var TBodyHtmlTag = require('../lib/html/tbody');

  it('should be returned from the factory when asked for a "tbody" tag', function(){
    expect(HtmlTag.factory('tbody')).to.be.a(TBodyHtmlTag);
  });

});


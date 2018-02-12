jest.dontMock('../lib/keyword-extractor');

describe('keyword-extractor', function() {
  it('combine nouns', function() {
    const keywordExtractor = require('../lib/keyword-extractor');
    const data = [ { surface: 'Node', features: '名詞,固有名詞,組織,*,*,*,*' },
      { surface: '.', features: '名詞,サ変接続,*,*,*,*,*' },
      { surface: 'js', features: '名詞,一般,*,*,*,*,*' },
      { surface: 'は', features: '助詞,係助詞,*,*,*,*,は,ハ' },
      { surface: '、', features: '記号,読点,*,*,*,*,、,、' },
      { surface: 'イベント', features: '名詞,一般,*,*,*,*,イベント,イベント' },
      { surface: '化', features: '名詞,接尾,サ変接続,*,*,*,化,カ' },
      { surface: 'さ', features: '動詞,自立,*,*,サ変・スル,未然レル接続,する,サ' },
      { surface: 'れ', features: '動詞,接尾,*,*,一段,連用形,れる,レ' },
      { surface: 'た', features: '助動詞,*,*,*,特殊・タ,基本形,た,タ' },
      { surface: '入出力', features: '名詞,サ変接続,*,*,*,*,入出力,ニュウシュツリョク' },
      { surface: 'を', features: '助詞,格助詞,一般,*,*,*,を,ヲ' },
      { surface: '扱う', features: '動詞,自立,*,*,五段・ワ行促音便,基本形,扱う,アツカウ' },
      { surface: 'Unix', features: '名詞,一般,*,*,*,*,*' },
      { surface: '系', features: '名詞,接尾,一般,*,*,*,系,ケイ' },
      { surface: 'プラットフォーム',
        features: '名詞,一般,*,*,*,*,プラットフォーム,プラットフォーム' },
      { surface: '上', features: '名詞,接尾,副詞可能,*,*,*,上,ジョウ' },
      { surface: 'の', features: '助詞,連体化,*,*,*,*,の,ノ' },
      { surface: 'サーバー', features: '名詞,一般,*,*,*,*,サーバー,サーバー' },
      { surface: 'サイド', features: '名詞,一般,*,*,*,*,サイド,サイド' },
      { surface: 'JavaScript', features: '名詞,一般,*,*,*,*,*' },
      { surface: '環境', features: '名詞,一般,*,*,*,*,環境,カンキョウ' },
      { surface: 'で', features: '助動詞,*,*,*,特殊・ダ,連用形,だ,デ' },
      { surface: 'ある', features: '助動詞,*,*,*,五段・ラ行アル,基本形,ある,アル' },
      { surface: '。', features: '記号,句点,*,*,*,*,。,。' } ];

    const expected = [{"features": "名詞,固有名詞,連結,*,*,*,*", "surface": "Node.js"}, {"features": "助詞,係助詞,*,*,*,*,は,ハ", "surface": "は"}, {"features": "記号,読点,*,*,*,*,、,、", "surface": "、"}, {"features": "名詞,固有名詞,連結,*,*,*,イベント,イベント", "surface": "イベント化"}, {"features": "動詞,自立,*,*,サ変・スル,未然レル接続,する,サ", "surface": "さ"}, {"features": "動詞,接尾,*,*,一段,連用形,れる,レ", "surface": "れ"}, {"features": "助動詞,*,*,*,特殊・タ,基本形,た,タ", "surface": "た"}, {"features": "名詞,サ変接続,*,*,*,*,入出力,ニュウシュツリョク", "surface": "入出力"}, {"features": "助詞,格助詞,一般,*,*,*,を,ヲ", "surface": "を"}, {"features": "動詞,自立,*,*,五段・ワ行促音便,基本形,扱う,アツカウ", "surface": "扱う"}, {"features": "名詞,固有名詞,連結,*,*,*,*", "surface": "Unix系プラットフォーム上"}, {"features": "助詞,連体化,*,*,*,*,の,ノ", "surface": "の"}, {"features": "名詞,固有名詞,連結,*,*,*,サーバー,サーバー", "surface": "サーバーサイドJavaScript環境"}, {"features": "助動詞,*,*,*,特殊・ダ,連用形,だ,デ", "surface": "で"}, {"features": "助動詞,*,*,*,五段・ラ行アル,基本形,ある,アル", "surface": "ある"}, {"features": "記号,句点,*,*,*,*,。,。", "surface": "。"}];

    expect(
      keywordExtractor.combine(
        data
      )
    ).toEqual(expected);
  });

});

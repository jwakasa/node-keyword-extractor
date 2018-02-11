const mecab = require('mecab-async');
const Promise = require('bluebird');

class KeywordExtractor {
  constructor() {}

  parseSync(text) {
    return this.combine(mecab.parseSync(text));
  }

  parse(text) {
    const self = this;
    return new Promise((resolve, reject) => {
      mecab.parse(text, function(err, result) {
        if (err) reject(err);
        return resolve(
          self.combine(
            result.map(r => ({
              surface: r[0],
              features: r.slice(1, 9).join(',')
            }))
          )
        );
      });
    });
  }

  combine(tokens) {
    return tokens.reduce((p, c) => {
      if (
        c.features.startsWith('名詞') &&
        p.length > 0 &&
        p[p.length - 1].features.startsWith('名詞')
      ) {
        p[p.length - 1].surface += c.surface;
        p[p.length - 1].features = [
          '名詞,固有名詞,連結',
          p[p.length - 1].features.split(',').slice(3, 8)
        ].join(',');
      } else {
        p.push(c);
      }
      return p;
    }, []);
  }
}

module.exports = KeywordExtractor;
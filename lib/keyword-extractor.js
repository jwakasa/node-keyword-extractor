const mecab = require('mecab-async');
const Promise = require('bluebird');

class KeywordExtractor {
  constructor() {
    this.convert = o => ({
      surface: o[0],
      features: o.slice(1, 9).join(',')
    });
  }

  parseSync(text) {
    return this.combine(mecab.parseSync(text).map(this.convert));
  }

  parse(text) {
    const self = this;
    return new Promise((resolve, reject) => {
      mecab.parse(text, function(err, result) {
        if (err) reject(err);
        return resolve(
          self.combine(result.map(self.convert))
        );
      });
    });
  }

  combine(tokens) {
    return tokens
      .reduce((p, c) => {
        const prevLastIdx = p.length - 1;
        if (
          c.features.startsWith('名詞') &&
          p.length > 0 &&
          p[prevLastIdx].features.startsWith('名詞')
        ) {
          p[prevLastIdx].surface += c.surface;
          p[prevLastIdx].features = [
            '名詞,固有名詞,連結',
            p[prevLastIdx].features.split(',').slice(3, 8)
          ].join(',');
        } else {
          p.push(c);
        }
        return p;
      }, []);
  }
}

module.exports = new KeywordExtractor();

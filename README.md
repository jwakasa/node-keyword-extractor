# node-keyword-extractor
[![NPM](https://nodei.co/npm/node-keyword-extractor.png)](https://nodei.co/npm/node-keyword-extractor/)

# Introduction
文章からキーワードを抽出する。
単純に形態素解析した結果だと形態素が細かくなってしまう場合があるため名詞連結を行っている。

# Quick Start
```
npm install node-keyword-extractor
```
```
const keywordExtractor = require('node-keyword-extractor');

keywordExtractor.parse('すもももももももものうち').then(tokens => console.log(tokens));
```
## Result
```

```

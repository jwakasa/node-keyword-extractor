# node-keyword-extractor
[![NPM](https://nodei.co/npm/node-keyword-extractor.png)](https://nodei.co/npm/node-keyword-extractor/)

# Introduction
文章からキーワードを抽出する。
単純に形態素解析した結果だと形態素が細かくなってしまう場合があるため名詞連結を行っている。

# Quick Start
## Install
```
npm install node-keyword-extractor
```
## Example
```
const keywordExtractor = require('node-keyword-extractor');

keywordExtractor.parse('すもももももももものうち').then(tokens => console.log(tokens));
```
## Result
```
[ { surface: 'すもも', features: '名詞,一般,*,*,*,*,すもも,スモモ' },
  { surface: 'も', features: '助詞,係助詞,*,*,*,*,も,モ' },
  { surface: 'もも', features: '名詞,一般,*,*,*,*,もも,モモ' },
  { surface: 'も', features: '助詞,係助詞,*,*,*,*,も,モ' },
  { surface: 'もも', features: '名詞,一般,*,*,*,*,もも,モモ' },
  { surface: 'の', features: '助詞,連体化,*,*,*,*,の,ノ' },
  { surface: 'うち', features: '名詞,非自立,副詞可能,*,*,*,うち,ウチ' } ]
```

// strip-tags.js

'use strict';

var cheerio = require('cheerio'); // 服务器版的jQuery

/**
 * 在生成组件效果展示时,解析出的VUE组件有些是带<script>和<style>的,我们需要先将其剔除,之后使用
 * @param  {[String]}       str   需要剔除的标签名 e.g'script'或['script','style']
 * @param  {[Array|String]} tags  e.g '<template></template><script></script>''
 * @return {[String]}             e.g '<html><head><template></template></head><body></body></html>'
 */
exports.strip = function(str, tags) {
  var $ = cheerio.load(str, {decodeEntities: false});

  if (!tags || tags.length === 0) {
    return str;
  }

  tags = !Array.isArray(tags) ? [tags] : tags;
  var len = tags.length;

  while (len--) {
    $(tags[len]).remove();
  }

  return $.html(); // cheerio 转换后会将代码放入<head>中
};


/**
 * 获取标签中的文本内容
 * @param  {[String]} str e.g '<html><body><h1>header</h1></body><script></script></html>'
 * @param  {[String]} tag e.g 'h1'
 * @return {[String]}     e.g 'header'
 */
exports.fetch = function(str, tag) {
  var $ = cheerio.load(str, {decodeEntities: false});
  if (!tag) return str;

  return $(tag).html();
};

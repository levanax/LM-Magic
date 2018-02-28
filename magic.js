const request = require('superagent');
const cheerio = require('cheerio');

const url = "http://www.12306.cn/mormhweb/zxdt/index_zxdt.html";

request.get(url).end(function(err, res){
  if(err){
    throw new Error('');
  }
  let $ = cheerio.load(res.text);
  // console.log($.html());
  console.log($('#newList').html())
})
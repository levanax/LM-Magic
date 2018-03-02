const request = require('superagent');
const cheerio = require('cheerio');

const url = "http://www.12306.cn/mormhweb/zxdt/index_zxdt.html";

request.get(url).end(function(err, res){
  if(err){
    throw new Error('');
  }
  let $ = cheerio.load(res.text, {decodeEntities: false});
  // console.log($.html());
  
  let noticeListEle = $('#newList li');
  let noticeDataList = [];
  for(let i = 0, length = noticeListEle.length; i<length; i++){
    let singleEle = $(noticeListEle[i]);
    noticeDataList.push({
      title: singleEle.find('a').attr('title'),
      href: singleEle.find('a').attr('href')
    })
  }
  console.log(noticeDataList)
})


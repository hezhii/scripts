const request = require('request');
const parseString = require('xml2js').parseString;

const URL = process.env.URL; // 提交到百度的网址
const TOKEN = process.env.TOKEN; // 百度站长主动推送token

fetchUrlDatas().then(urls => push(urls));

function push(urls) {
  if (!urls || !urls.length) {
    console.error('欲推送的地址数目不能为空');
    return;
  }

  const options = {
    url: `http://data.zz.baidu.com/urls?site=${URL}&token=${TOKEN}`,
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain',
    },
    body: urls.join('\n')
  };

  request(options, (err, res, body) => {
    if (err) {
      console.error(`推送Url时遇到问题: ${err.message}`);
    } else {
      let result = JSON.parse(body);
      console.log(`成功推送 ${result.success} 条url，今天剩余 ${result.remain} 条可推送url。`);
    }
  });
}

function fetchUrlDatas() {
  return new Promise((resolve, reject) => {
    request(`http://${URL}/sitemap.xml`, (err, res, body) => {
      if (err) {
        console.error(`获取sitemap时遇到问题: ${err.message}`);
        reject(err);
      } else {
        extractUrls(body).then(
          urls => resolve(urls),
          err => reject(err)
        );
      }
    });
  });
}

function extractUrls(body) {
  return new Promise((resolve, reject) => {
    parseString(body, (err, result) => {
      if (err) {
        console.error(`解析sitemap时遇到问题：${err.message}`);
        reject(err);
      } else {
        let urls = result.urlset.url.map((url) => {
          return url.loc[0];
        });
        console.log(`从sitemap中提取${urls.length}个url：\n${urls.join('\n')}`);
        resolve(urls);
      }
    });
  })
}

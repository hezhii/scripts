const request = require('request');

const urls = [
  'http://www.whezh.com/',
  'http://www.whezh.com/2017/08/software-install/',
];

const options = {
  url: 'http://data.zz.baidu.com/urls?site=www.whezh.com&token=USUmUVxSr6fLvqzM',
  method: 'POST',
  headers: {
    'Content-Type': 'text/plain',
  },
  body: urls.join('\n')
};

request(options, (err, res, body) => {
  if (err) {
    console.error(`请求遇到问题: ${err.message}`);
  } else {
    let result = JSON.parse(body);
    console.log(`成功推送 ${result.success} 条url，今天剩余 ${result.remain} 条可推送url。`);
  }
});

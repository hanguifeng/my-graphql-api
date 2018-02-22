import fetch from 'node-fetch';
import cheerio from 'cheerio';
import { NewsDomain } from './domain';

// TODO 加到scripts里
// 获取爬虫的目标url
const getTargetDoubanMovieUrl = page => `http://www.pubchn.com/news/list.php?catid=4${page !== 1 ? ('&page=' + page) : ''}`;


// 从url拉取html
const getHtml = async targetUrl => await fetch(targetUrl);

// 从html中获得数据
const getDataFromHtml = (htmlCode, index) => {
  const news = []; // 保存从html中解析出来的电影数据
  const $ = cheerio.load(htmlCode);
  $('.d_sp_li_right2').each((i, elem) => {
    const newInfo = {
      id: `${i}${index}`,
      time: elem.children[0].data,
    };
    news.push(newInfo);
  });
  $('.d_sp_li_left').each((i, elem) => {
    news[i].title = elem.children[0].data;
  });
  $('.d_listShiPin a').each((i, elem) => {
    news[i].url = elem.attribs.href;
  });
  return news;
};


// 将数据插入数据库
const saveData = async (news) => {
  if (Array.isArray(news)) {
    await Promise.all(news.map(async m => await NewsDomain.create(m)));
  }
};


const main = async () => {
  const targetUrls = [];
  for (let i = 1; i < 5; i += 1) {
    targetUrls.push(getTargetDoubanMovieUrl(i));
  }
  const htmls = [];

  await Promise.all(targetUrls.map(async (url) => {
    console.log(url);
    const code = await getHtml(url);
    const body = await code.text();
    htmls.push(body);
  }));

  let news = [];

  await Promise.all(htmls.map(async (h, index) => {
    const data = await getDataFromHtml(h, index);
    news = news.concat(data);
  }));

  await saveData(news);
};


export default main;

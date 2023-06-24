// 採用情報が掲載されたページにおける募集エリアだけを抽出することを想定したサンプル
// 詳細はスクレイピング対象にあわせて調整すること
const axios = require("axios");
const cheerio = require("cheerio");
const line = require("@line/bot-sdk");

const lineConfig = {
  channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.LINE_CHANNEL_SECRET,
};

const LINE_USER_ID = process.env.LINE_USER_ID;

const client = new line.Client(lineConfig);

const sendMessage = async (userId, text) => {
  const message = {
    type: "text",
    text: text,
  };
  await client.pushMessage(userId, message);
};

const scrapeWebsite = async (url) => {
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);

  // tableクラスから募集エリアのテキストを抽出する
  const result = [];

  $(".table").each((index, element) => {
    result.push($(element).find("tr").eq(1).find("td").eq(1).text());
  });

  return result;
};

const generateMessage = (scrapeResult) => {
  return `今日の速報だよ\n${scrapeResult.join("、")}`;
};

exports.handler = async (event, context) => {
  const scrapeResult = await scrapeWebsite(
    "https://hogehoge.com" // スクレイピング対象のURL
  );
  const message = generateMessage(scrapeResult);

  await sendMessage(LINE_USER_ID, message);
};

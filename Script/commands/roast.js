// roast.js
module.exports.config = {
  name: "roast",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Hridoy Khan",
  description: "Give a funny roast to a tagged person 😈",
  commandCategory: "fun",
  usages: "roast [@tag or name]",
  cooldowns: 5,
};

module.exports.run = async function ({ api, event, args }) {
  const name =
    Object.keys(event.mentions).length > 0
      ? Object.values(event.mentions)[0]
      : args.join(" ") || "তুই";

  const roasts = [
    `${name}, তুই এমন বুদ্ধিমান, গুগলও তোকে সার্চ করতে ভয় পায় 😭`,
    `${name}, তোকে দেখে বুঝি কেন “before” ছবিগুলা তোলা হয় 😂`,
    `তুই এত slow, 2G সিম ও তোকে দেখে গতি বাড়ায় 😹`,
    `${name}, তুই এমন একটা bug, যেটা uninstall করলেও ঠিক হয় না 😈`,
    `তুই এমন cute, কুকুরেরাও তোকে ignore করে 🐶`,
    `তুই এমন হ্যান্ডসাম, আয়নায় তাকালে আয়নাই চুরি করে পালায় 😭`,
    `${name}, তোকে দেখে মনে হয় ঈদের গরু 🐄 কিন্তু বুদ্ধি মুরগির মতো 🐔`,
    `তুই এমন smart, ১০ টাকার ক্যালকুলেটরও তোকে লজ্জা দেয় 🤣`,
    `${name}, তোর মতো মানুষ থাকলে AI-এর দরকার কী ছিল? 😆`,
    `তুই এমন ভয়ানক, ভূতরাও তোকে দেখে ভয়ে চাকরি ছেড়ে দিয়েছে 👻`
  ];

  const roast = roasts[Math.floor(Math.random() * roasts.length)];
  return api.sendMessage(`🔥 ${roast}`, event.threadID, event.messageID);
};

const cron = require("node-cron");

module.exports.config = {
  name: "jumma",
  version: "1.0.1",
  credits: "Akash",
  description: "প্রতি শুক্রবার সকল গ্রুপে Jumma Mubarak শুভেচ্ছা পাঠাবে বড় ক্যাপশনসহ"
};

// বড় Jumma Mubarak ক্যাপশন
const messages = [
  `🕌🌸 জুম্মা মোবারক 🌸🕌

আজকের এই পবিত্র দিনে আল্লাহর রহমত, বরকত ও শান্তি সবার জীবনে প্রবাহিত হোক।  
নামাজের গুরুত্ব ভুলে যেও না, দোয়া করো নিজের জন্য এবং পরিবারের জন্য।  
আল্লাহ আমাদের সকল গুনাহ মাফ করুন, হৃদয়কে শান্তি দান করুন এবং জীবনকে সুন্দর করে তুলুন।  

🌙 আজকের দিনটি হোক স্মরণীয়, অন্যদের সাহায্য করার দিন, এবং ভালো কাজ করার অনুপ্রেরণা।  
বন্ধুদের সাথে ভাগ করে নাও এই আনন্দ, কারণ জুম্মার দিন আল্লাহ খুব খুশি হন।  

💛 Jumma Mubarak! সবাইকে আল্লাহর কৃপা ও আশীর্বাদ লাভ হোক। 🤲`
];

module.exports.onLoad = function ({ api }) {
  // প্রতি শুক্রবার সকাল ৮টায় মেসেজ পাঠাবে
  cron.schedule("0 8 * * 5", () => {
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];

    // সকল গ্রুপে পাঠানো
    for (const threadID of global.data.allThreadID) {
      api.sendMessage(randomMsg, threadID);
    }
  }, { timezone: "Asia/Dhaka" });
};

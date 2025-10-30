const cron = require("node-cron");

module.exports.config = {
  name: "jumma",
  version: "1.0.2",
  credits: "Hridoy",
  description: "প্রতি শুক্রবার সকলে Jumma Mubarak শুভেচ্ছা পাবে বড় ক্যাপশনসহ"
};

// 🌙 বড় Jumma Mubarak ক্যাপশন
const messages = [
  `🕌🌸 জুম্মা মোবারক 🌸🕌

আজকের এই পবিত্র দিনে আল্লাহর রহমত, বরকত ও শান্তি সবার জীবনে বর্ষিত হোক।  
নামাজ আদায় করো, দোয়া করো নিজের ও পরিবারের জন্য।  
আল্লাহ আমাদের সকল গুনাহ মাফ করুন, হৃদয়ে শান্তি দান করুন এবং জীবনকে সুন্দর করে তুলুন।  

🌙 আজকের দিনটি হোক কল্যাণময়, অন্যদের সাহায্য করার অনুপ্রেরণায় ভরপুর।  
বন্ধুদের সাথে ভাগ করে নাও এই আনন্দ, কারণ জুম্মার দিনে আল্লাহ তায়ালা খুবই সন্তুষ্ট হন।  

💛 Jumma Mubarak! 🤲 সবাইকে আল্লাহর কৃপা ও আশীর্বাদ লাভ হোক।`
];

module.exports.onLoad = function ({ api }) {
  // প্রতি শুক্রবার সকাল ৮টায় (বাংলাদেশ সময়) মেসেজ পাঠাবে
  cron.schedule("0 8 * * 5", () => {
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];

    // সকল গ্রুপে পাঠানো
    if (global.data && global.data.allThreadID) {
      for (const threadID of global.data.allThreadID) {
        api.sendMessage(randomMsg, threadID);
      }
      console.log("✅ Jumma Mubarak message sent to all groups!");
    } else {
      console.log("⚠️ No group data found in global.data.allThreadID");
    }
  }, { timezone: "Asia/Dhaka" });
};
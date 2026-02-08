function checkPassword() {
  const pass = document.getElementById("password").value;
  if (pass === "23.2.2010") {
    document.getElementById("login").style.display = "none";
    document.getElementById("content").style.display = "block";
  } else {
    alert("كلمة السر غلط 💔");
  }
}

// ❤️ عداد الحب
const startDate = new Date("2010-02-23");
setInterval(() => {
  const now = new Date();
  const diff = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));
  document.getElementById("counter").innerText =
    `عدد أيام حبنا: ${diff} يوم ❤`;
}, 1000);

// 💌 رسائل متغيرة
const messages = [
  "أنت أجمل شيء حصل في حياتي 💖",
  "حبك نعمة بشكر ربنا عليها 🌹",
  "كل يوم بحبك أكتر ❤️",
  "وجودك في حياتي أمان 🫶"
];

let i = 0;
setInterval(() => {
  document.getElementById("message").innerText = messages[i];
  i = (i + 1) % messages.length;
}, 4000);

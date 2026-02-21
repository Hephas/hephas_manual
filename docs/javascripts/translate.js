// 初始化 Google 翻譯
function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'zh-TW', // 您的原始語言
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE
  }, 'google_translate_element');
}

// 網頁載入後，自動在右下角產生一個懸浮選單
document.addEventListener("DOMContentLoaded", function() {
  // 建立外框
  var div = document.createElement('div');
  div.id = 'google_translate_element';
  div.style.position = 'fixed';
  div.style.bottom = '20px';
  div.style.right = '20px';
  div.style.zIndex = '9999';
  div.style.backgroundColor = 'white';
  div.style.padding = '8px';
  div.style.borderRadius = '8px';
  div.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
  document.body.appendChild(div);

  // 載入 Google 翻譯腳本
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  document.head.appendChild(script);
});

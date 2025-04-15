document.getElementById('imageUpload').addEventListener('change', function(e) {
  const file = e.target.files;
  if (!file.type.startsWith('image/')) return;
  
  const reader = new FileReader();
  reader.onload = function(evt) {
    insertImage(evt.target.result);
  };
  reader.readAsDataURL(file);
});

function insertImage(base64) {
  const img = document.createElement('img');
  img.src = base64;
  img.style.maxWidth = '100%';
  document.getElementById('articleContent').appendChild(img);
}
function publishArticle() {
  const contentHTML = document.getElementById('articleContent').innerHTML;
  // 保存到localStorage时需进行XSS过滤
  const sanitizedContent = sanitizeHTML(contentHTML);
  // ...原有保存逻辑...
}
if (file.size > 2 * 1024 * 1024) {
  alert('图片大小不能超过2MB');
  return;
}
const editorContent = document.getElementById('articleContent');
editorContent.addEventListener('dragover', (e) => {
  e.preventDefault();
  e.currentTarget.style.backgroundColor = '#f0f8ff';
});

editorContent.addEventListener('drop', (e) => {
  e.preventDefault();
  const file = e.dataTransfer.files;
  // 调用上传逻辑...
});
editorContent.addEventListener('paste', (e) => {
  const items = e.clipboardData.items;
  for (const item of items) {
    if (item.type.startsWith('image/')) {
      const blob = item.getAsFile();
      const reader = new FileReader();
      reader.onload = (evt) => insertImage(evt.target.result);
      reader.readAsDataURL(blob);
    }
  }
});
const lazyLoad = () => {
  document.querySelectorAll('img[data-src]').forEach(img => {
    if (img.getBoundingClientRect().top < window.innerHeight) {
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
    }
  });
};
window.addEventListener('scroll', lazyLoad);

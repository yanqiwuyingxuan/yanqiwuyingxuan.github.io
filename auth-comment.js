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

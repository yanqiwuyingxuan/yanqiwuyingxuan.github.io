// 用户注册
document.getElementById('btn-signup').addEventListener('click', () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  auth.createUserWithEmailAndPassword(email, password)
    .then(() => alert('注册成功!'))
    .catch(error => alert('错误: ' + error.message));
});

// 用户登录
document.getElementById('btn-login').addEventListener('click', () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  auth.signInWithEmailAndPassword(email, password)
    .catch(error => alert('错误: ' + error.message));
});

// 评论提交
document.getElementById('comment-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const commentText = document.getElementById('comment-text').value;
  
  if(auth.currentUser) {
    db.collection("comments").add({
      postId: window.location.pathname,
      author: auth.currentUser.email,
      content: commentText,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }).then(() => document.getElementById('comment-text').value = "");
  } else {
    alert('请先登录!');
  }
});

// 实时加载评论
auth.onAuthStateChanged(user => {
  if(user) {
    document.getElementById('user-email').textContent = user.email;
    document.getElementById('auth-form').style.display = 'none';
  }
  
  db.collection("comments")
    .where("postId", "==", window.location.pathname)
    .orderBy("timestamp", "desc")
    .onSnapshot(snapshot => {
      const commentsContainer = document.getElementById('comments-list');
      commentsContainer.innerHTML = '';
      snapshot.forEach(doc => {
        const comment = doc.data();
        commentsContainer.innerHTML += `
          <div class="comment">
            <strong>${comment.author}</strong>
            <p>${comment.content}</p>
            <small>${comment.timestamp?.toDate().toLocaleString()}</small>
          </div>
        `;
      });
    });
});

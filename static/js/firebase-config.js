// 从Firebase控制台获取配置信息: https://firebase.google.com/
const firebaseConfig = {
  apiKey: "AIzaSyABCDEFG1234567890",
  authDomain: "buning-buqi.firebaseapp.com",
  projectId: "buning-buqi",
  storageBucket: "buning-buqi.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdefg1234567890"
};

// 初始化Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

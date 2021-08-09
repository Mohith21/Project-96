var firebaseConfig = {
    apiKey: "AIzaSyB_4LnFCHIxSjLS_nW692iMxUxAWl5XfWA",
    authDomain: "let-s-chat-page.firebaseapp.com",
    projectId: "let-s-chat-page",
    storageBucket: "let-s-chat-page.appspot.com",
    messagingSenderId: "57837290628",
    appId: "1:57837290628:web:238ec6772f7bd8930aeed1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value = "";
}
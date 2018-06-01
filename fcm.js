importScripts('http://www.gstatic.com/firebasejs/4.8.1/firebase-app.js')
importScripts('http://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js')
firebase.initializeApp({
'messagingSenderId': '672807797348'
});

const messaging = firebase.messaging()
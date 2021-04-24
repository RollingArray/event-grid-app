importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-messaging.js');
 
firebase.initializeApp({
    apiKey: "AIzaSyAkc2gykXzcNdw2WTEQ5Q94yIyab8TvNiQ",
    authDomain: "event-grid.firebaseapp.com",
    projectId: "event-grid",
    storageBucket: "event-grid.appspot.com",
    messagingSenderId: "149560320630",
    appId: "1:149560320630:web:f76baceff60678ba7fb557"
});
 
const messaging = firebase.messaging();
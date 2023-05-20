// Import the functions you need from the SDKs you need

import { FirebaseOptions, initializeApp } from "firebase/app";
import { getPerformance } from "firebase/performance";
import { performanceCookiesEnabledAtom } from './local-storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig: FirebaseOptions = {
    apiKey: "AIzaSyCUd3Va9qvnv0TDtn1fGVoNmKhHGFh1Y9A",
    authDomain: "website-17fc7.firebaseapp.com",
    projectId: "website-17fc7",
    storageBucket: "website-17fc7.appspot.com",
    messagingSenderId: "159365300949",
    appId: "1:159365300949:web:38df18ee6e3a3bc6a9185c",
    measurementId: "G-C7GD5ZZQ8T"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
let analyticsImported = false;

if (performanceCookiesEnabledAtom.get()) {
    await import("firebase/analytics");
    analyticsImported = true;
    app.automaticDataCollectionEnabled = true;
    console.info("Since performance cookies are enabled, Google Analytics integration has been enabled for Firebase.");
} else {
    app.automaticDataCollectionEnabled = false;
    console.info("Since performance cookies are disabled, Google Analytics integration has been disabled for Firebase.");
}

performanceCookiesEnabledAtom.subscribe(value => {
    if (value) {
        import("firebase/analytics").then(() => {
            analyticsImported = true;
            app.automaticDataCollectionEnabled = true;
            console.info("Since performance cookies are enabled, Google Analytics integration has been enabled for Firebase.");
        });
    } else if (analyticsImported) {
        location.reload();
    }
});

const performance = getPerformance(app);


if (performanceCookiesEnabledAtom.get()) {
    performance.dataCollectionEnabled = true;
    performance.instrumentationEnabled = true;
    console.info("Since performance cookies are enabled, Performance Analysis & Crashlytics has been enabled for Firebase.")
} else {
    performance.dataCollectionEnabled = false;
    performance.instrumentationEnabled = false;
    console.info("Since performance cookies are disabled, Performance Analysis & Crashlytics has been disabled for Firebase.")
}
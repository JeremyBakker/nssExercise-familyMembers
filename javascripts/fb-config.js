"use strict";


let firebase = require("../lib/node_modules/firebase/app.js"),
    fb = require("./fb-getter"),
    fbData = fb();

var config = {
  apiKey: fbData.apiKey,
  databaseURL: fbData.databaseURL,
  authDomain: fbData.authDomain
};

firebase.initializeApp(config);

module.exports = firebase;
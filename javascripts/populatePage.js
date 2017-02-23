"use strict";

let familyTemplate = require("../templates/family-grid.hbs"),
	remove = require("./deleteFamily.js");

function populatePage(data) {
	$("#family").empty();
	let newDiv = document.createElement("div");
	newDiv.innerHTML = familyTemplate(data);
	$("#family").append(newDiv);
	remove.listener();
}

module.exports = {populatePage};
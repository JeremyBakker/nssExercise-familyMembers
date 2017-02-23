"use strict";

let firebase = require("./fb-config.js"),
	parse = require("./parseFamily.js"),
    write = require("./populatePage.js");



function getFamily() {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: `*****`
		}).done((familyData) => {
			parse.parseFamily(familyData);
		});
	});
}

module.exports = {getFamily};
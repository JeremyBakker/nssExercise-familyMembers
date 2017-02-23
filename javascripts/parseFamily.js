"use strict";

let write = require("./populatePage.js");

function parseFamily(data){
	let newFamilyArray = [];
	for (var property in data) {
		let newFamily = {};
		newFamily.id = property;
		newFamily.name = data[property].name;
		newFamily.age = data[property].age;
		newFamily.gender = data[property].gender;
		newFamily.skills = data[property].skills;
		newFamilyArray.push(newFamily);
	}
	console.log("newFamilyArray", newFamilyArray);
	var newFamilyObject = {};
	newFamilyObject.family = newFamilyArray;
	console.log("newFamilyObject", newFamilyObject);
	write.populatePage(newFamilyObject);	
}

module.exports = {parseFamily};
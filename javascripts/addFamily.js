"use strict";

let load = require("./getFamily.js");

$("#submitButton").click((event)=>{
	let newFamily = {};
	newFamily.name = $("#name").val();
	newFamily.age = $("#age").val();
	newFamily.gender = $("#gender").val();
	newFamily.skills = $("#skills").val();
	return new Promise(function(resolve, reject){
		$.ajax({
			url: "*****",
			type: "POST",
			data: JSON.stringify(newFamily),
			dataType: "json"
		}).done(load.getFamily());
	});
});

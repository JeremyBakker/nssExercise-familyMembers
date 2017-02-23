"use strict";

let load = require("./getFamily.js");

function listener(){
	$(".delete").click((event)=>{
		return new Promise((resolve, reject) => {
			$.ajax({
				url: `https://family-e8127.firebaseio.com/family/${event.currentTarget.id}.json`,
				type: "DELETE",
			}).done($(event.currentTarget).parent().remove());
		});
	});
}

module.exports = {listener};

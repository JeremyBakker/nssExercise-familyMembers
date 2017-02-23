"use strict";

let load = require("./getFamily.js");

function listener(){
	$(".delete").click((event)=>{
		return new Promise((resolve, reject) => {
			$.ajax({
				url: `*****`,
				type: "DELETE",
			}).done($(event.currentTarget).parent().remove());
		});
	});
}

module.exports = {listener};

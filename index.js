'use strict';

/**
 * Adds commas to a number
 * @param {number} number
 * @param {string} locale
 * @return {string}
 */
module.exports = function(number, locale) {
    return number.toLocaleString(locale);
};


/* Get the query and send a API request to memegen.link */

function sendRequest() {
	var query = document.getElementById("input-query").value;
	console.log(query);
	var meme = "<img src='http://memegen.link/doge/" + query + ".jpg' />";
	var content = document.getElementById("result").innerHTML = "<p>"+meme+"</p>";

}


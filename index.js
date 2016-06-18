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

/* Twilio */

// Set up with TOKEN, a string generated server-side
    Twilio.Device.setup("60357e63cb3d9ec7c403ab5a1a565a4d");

    Twilio.Device.ready(function() {
        // Could be called multiple times if network drops and comes back.
        // When the TOKEN allows incoming connections, this is called when
        // the incoming channel is open.
    });

    Twilio.Device.offline(function() {
        // Called on network connection lost.
    });

    Twilio.Device.incoming(function(conn) {
        console.log(conn.parameters.From); // who is calling
        conn.status // => "pending"
        conn.accept();
        conn.status // => "connecting"
    });

    Twilio.Device.cancel(function(conn) {
        console.log(conn.parameters.From); // who canceled the call
        conn.status // => "closed"
    });

    Twilio.Device.connect(function (conn) {
        // Called for all new connections
        console.log(conn.status);
    });

    Twilio.Device.disconnect(function (conn) {
        // Called for all disconnections
        console.log(conn.status);
    });

    Twilio.Device.error(function (e) {
        console.log(e.message + " for " + e.connection);
    });

    $(document).ready(function () {
        Twilio.Device.connect({
            agent: "MemeTxt",
            phone_number: "5103610463"
        });
    });

    $("#hangup").click(function() {
        Twilio.Device.disconnectAll();
    });


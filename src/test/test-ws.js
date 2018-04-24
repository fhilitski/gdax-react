
var moment = require('moment'); //moment.js for timestamp formatting
const Gdax = require('gdax');
const ws_endpoint = 'wss://ws-feed.gdax.com'; //gdax ws endpoint
const ws_options ={ channels: [ 'ticker'] };
const ws_product_id = ['BTC-USD','ETH-USD','ETH-BTC']; 
var wsconn = new Gdax.WebsocketClient(ws_product_id, ws_endpoint, null, ws_options);
/*
If WS feed broadcasts error, log and send it to all clients
*/
wsconn.on('error', function(err){
  var msg = get_ts_string() + "WS feed ERROR: " + err;	  
  console.error(msg);
});

wsconn.on('open', function() {
var msg = get_ts_string() + ': WS GDAX connection opened';
console.log(msg);
});

wsconn.on('close', function() {
var msg = get_ts_string() + ': WS GDAX connection closed';
console.log(msg);
//at this point, WS instance is dead
//wsconn.connect();//this will not work
});

/*
Outputs currently obtained tickers to the console
and broadcasts to all connected websocket clients with broadcase == true 
*/
wsconn.on('message', (data) => {console.log(data)});

function get_ts_string(){
  var timestamp  = new Date(); //record a timestamp
  var m_timestamp = moment(timestamp);  
  return m_timestamp.format("MM/DD/YYYY HH:mm:ss Z");
}
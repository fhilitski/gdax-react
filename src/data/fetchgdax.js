let apiEndpoint = 'https://api.gdax.com';
let request = apiEndpoint + '/products';
fetch(request).then((res) => {
   return res.json().then((resJSON) => {
       console.log(resJSON)});
});
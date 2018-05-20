let apiEndpoint = 'https://api.gdax.com';
let request = apiEndpoint + '/products';
fetch(request).then((res) => {
    console.log(res);
});

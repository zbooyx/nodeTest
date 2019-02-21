const url = require('url');
const myUrl = new URL('http://mywebsitr.com:8000/hello.html?id=100&status=active');


// serlialized url


console.log(myUrl.toJSON());


// Host (root domain)

console.log(myUrl.host);


console.log(myUrl.hostname);


console.log(myUrl.pathname);

console.log(myUrl.search);

console.log(myUrl.searchParams);


//add params

myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);


myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));

const fs = require("fs");
const http = require("http");
const url = require("url");
const data = fs.readFileSync("./data.json", "utf8");
const dataobj = JSON.parse(data).carts;

const htmltemplate = `
<!DOCTYPE HTML>
<html lang='en'>
<head>
    <style>
        img {
            max-height: 300px;
            max-width: 300px;
            margin: 20px;
            border:2px solid black;
        }
        img:hover {
            transform: scale(1.1); /* Corrected property name */
            cursor: grab;
        }
        .product-cart {
            max-width: 500px;
            margin: 20px auto;
            border: 5px double black;
            border-radius: 8px;
            padding: 16px;
            background-color: gray;
            color: white;
            border-radius: 50px;
            text-align: center;
        }
        .product-cart h3 {
            margin: 0;
        }
        .product-cart p {
            margin: 5px 0;
        }
        .product-cart a {
            color: white;
            text-decoration: none;
        }
        form{
            text-align:center;
        }
        input{
            padding:3px 20px;
            border-radius:10px;
            border: 1px solid black;
        }
        button{
            background-color:blue;
            color:white;
            padding: 4px 15px;
            border:none;
            border-radius:10px;
        }
    </style>
</head>
<body>
<form action='/product'>
<input type="text" name="id">
<button type="submit">search</button>
</form>
    __PRODUCT_CARD__
</body>
</html>
`;
// const inputelement=`
// <form action='/product'>
// <input type="text" name="id">
// <button type="submit">search button</button>
// </form>
// `
const carttemplate = `
<div class="product-cart">
    <h3>ID: id</h3>
    <h3>Title: title</h3>
    <img src="img1">
    <p>Price: price</p>
    <p>Total: total</p>
    <a href="/product?id=link">More Info</a>
</div>
`;


const carts = `
<div class="product-cart" >
    <p class=title>title</p>
    <p>Price=price</p>
    <p>Total=total</p>
    <img src="img1" alt=" ">
    <a href="/home"> back..</a>
</div>
`;

let result = [];
for (let i = 0; i < dataobj.length; i++) {
    const products = dataobj[i].products;
    for (let j = 0; j < products.length; j++) {
        let temp = carttemplate;
        temp = temp.replace('id', products[j].id);
        temp = temp.replace('title', products[j].title);
        temp = temp.replace('img1', products[j].thumbnail);
        temp = temp.replace('price', products[j].price);
        temp = temp.replace('total', products[j].total);
        result.push(temp);
    }
}

result = result.join(' ');

const page = htmltemplate.replace('__PRODUCT_CARD__', result);

const server = http.createServer((req, res) => {

//   res.writeHead(200,()=>{
//          'Content-type':'text/html,'
//   })
  res.setHeader('Content-Type', 'text/html');

    const path = url.parse(req.url, true);
    const pathname = path.pathname;
    const q = path.query;

    console.log(pathname, '\n');

    if (pathname === '/home') {
        res.end(page);
    } else if (pathname === '/product') {
        const qid = q.id;
        const temp = [];
        dataobj.forEach(({ products }) => {
            products.forEach((item) => {
                temp.push(item);
            });
        });
        const searchItem = temp.filter(({ id }) => id == qid);
        
        if (searchItem.length > 0) { // Check if searchItem contains elements
            let next = [];
            let temp2 = carts;
    
            temp2 = temp2.replace('title', searchItem[0].title);
            temp2 = temp2.replace('price', searchItem[0].price);
            temp2 = temp2.replace('total', searchItem[0].total);
            temp2 = temp2.replace('link', searchItem[0].id);
            temp2 = temp2.replace('img1', searchItem[0].thumbnail);
            next.push(temp2);
            const page2 = htmltemplate.replace('__PRODUCT_CARD__', next);
            res.end(page2);
        } else {
            res.end('Product not found');
        }
    }else {
        res.end('404 not found');
    }
});

server.listen(1600, () => {
    console.log('---------------started-------------');
});

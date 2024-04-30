// const b=new Buffer.from('abcjhgfd');
// console.log(b.toString())
// b.write('other')
// console.log(b.toString())

// const fs=require('fs')
// fs.writeFileSync('./logs.txt',"its file system")


// const fs = require('fs');
// console.log('start')
// const data=fs.readFileSync('./myreadme.txt',{encoding : 'utf8'});
// console.log(data)
// console.log('end')

               //promises file system
// console.log('start')
// const fspromises=require('fs/promises')
// const pr=fspromises.readFile('./myreadme.txt',{encoding:'utf8'})
// console.log(pr)
// pr.then((res)=>{
//     console.log(res)
// })
// console.log('end')

//call back in file system

// const fs=require('fs')
// const data=fs.readFile('./myreadme.txt',{encoding:'utf8'},(err,data)=>{
//   console.log(data)
// })

// http://localhost:1500/

const http = require('http');
const fs = require('fs');
const data2 = fs.readFileSync('./data.json', 'utf-8');
const dataobj = JSON.parse(data2);
console.log(data2)
const products = dataobj.products;

const htmltemplate = `
<!DOCTYPE HTML>
<html lang='en'>
      <head>
      <style>
      img{
            max-height:300px;
            max-width:300px;
           margin:20px;
      }
      img:hover{
            scale:1.2;
            cursour:grab;
      }
   .product_card{
      max-width:500px;
      margin:20px auto;
      border:5px double black;
      border-radius:8px;
      padding:16px;
      background-color:gray;
      color:white;
      border-radius:50px;
      text-align:center;
   }
   a{
      color:white;
      text-decoration:none;
      margin:20px;
   }
   </style>
      </head>
      <body>
            __PRODUCT_CARD__
      </body>
</html>
`;

const cardtemplate = `
<div class="product_card">
    <h4>__title__</h4>
    <p>__info__</p>
    <img src="img1">
    <div>PRICE=price</div>
    <div>RATING=rating</div>
    <a href="anker">Get id</a>
</div>
`;

const allcard = products.map((elem) => {
    let newcard = cardtemplate
    newcard = newcard.replace('__title__', elem.title)
    newcard = newcard.replace('__info__', elem.description)
    newcard = newcard.replace('img1', elem.images[0])
    newcard = newcard.replace('price', elem.price)
    newcard = newcard.replace('rating', elem.rating)
    newcard = newcard.replace('anker', elem.id)
    return newcard;
});




const page = htmltemplate.replace('__PRODUCT_CARD__', allcard.join(''));

const app = http.createServer((req, res) => {
    console.log('Request received');
    console.log(req.url);
    res.writeHead(200, {
        'Content-type': 'text/html'
    });
    res.end(page);
});

app.listen(1500, () => {
    console.log('Server started on port 1500');
});

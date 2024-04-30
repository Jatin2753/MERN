// console.log('start')

// setTimeout(()=>{console.log('timeout...')},0)

// console.log('end')
// console.log('end 2')
// console.log('end 3')
// console.log('end 4')
// output   timeout shouble be come in end


// setTimeout(()=>{console.log('timeout 1...')},20000)
// console.log('start')
// setTimeout(()=>{console.log('timeout 2...')},5000)

// console.log('end')
// console.log('end 2')
// console.log('end 3')
// console.log('end 4')


//   promise and call back

// function createorder(x,fn){
//     console.log(x)
//     setTimeout(()=>{fn('jhsefw')},1000)
// }
// function makepayment(orderid){
//     console.log(orderid)
// }

// createorder('soap',makepayment)


// setTimeout(()=>{console.log('first timeout')},0)

// const pr=new Promise((resolve,reject)=>{
 
// setTimeout(()=>{ reject("items are out of stock")},1000)
   
// })
// console.log(pr)
// pr.then((res)=>{
//     console.log(res)
// }).catch((err)=>{
// console.log(err)
// })


// setTimeout(function abc(){
//     console.log('i am one');
// },0)
// const pr=new Promise((res,rej)=>{
//     setTimeout(()=>{res('done')},0)
// })

// pr.then(function b(res){
//     console.log('promise done',res);
// })
// setTimeout(function xyz(){
//     console.log('i am two')
// },0);
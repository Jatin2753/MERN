// const figlet=require('figlet');
// figlet('Jatin  Gupta',(err,data)=>{
//     console.log(data)
// })


// console.log('start')
// fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/delhi?unitGroup=metric&key=XLWWFJLF6SJ7542HQXTK7GYNT')
// .then((res)=>{
//     return res.json();
// })
// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//   console.log('erroe occured')
// })
// console.log('end')

//async await


// console.log("fetched start")
// async function getAPI(){
//     console.log("api calling")
//    const pr=await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/delhi?unitGroup=metric&key=XLWWFJLF6SJ7542HQXTK7GYNT')
//    console.log("making json")
//    const data=await pr.json();
//    console.log("fetched data")
// } 

// getAPI()
// console.log("fetched end")


console.log('Start');


async function  callAPI(){
    const pr= new Promise((res, rej)=>{
        console.log('promise1....');
        setTimeout(() => {
            console.log('timeout1......')
        },10000);
    })
    console.log('promise 1 completed......')
}
callAPI()
console.log('end');
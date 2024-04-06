          //array

// let arr=[1,2,3,4]
// arr=[2,3,4,5]
// console.log(arr);

// const arr=[1,2,3,4]
// arr[3]=20
// console.log(arr)
//output [1, 2, 3, 20]

// const arr=[1,2,3,4]
// arr[13]=20
// console.log(arr)
//output  [1, 2, 3, 4, empty × 9, 20]

// const arr=[1,2,3,4]
// arr.push(20)
// console.log(arr)
//output [1, 2, 3, 4, 20]

// const arr=[1,2,3,4]
// arr.pop()
// console.log(arr)
// output [1, 2, 3]

// to find type of array

// const obj={
//     "name":"jatin",
//     "lastname":"gupta",
// }
// const arr=[1,2,3,4]
// // console.log(typeof(obj))
// // console.log(typeof(arr))

// console.log(Array.isArray(obj))
// console.log(Array.isArray(arr))

// const arr="my name is jatin"
// check = function() {
//    if(Array.isArray(arr))
//    {
//     console.log("array")
//    }
//    else if(typeof(arr)=="object"){
//     console.log("object")
//    }
//    else{
//       console.log("not object")
//    }

//   }
// check()

         //loops

// const arr=['name',2]
// const obj={
//   'name':"jatin",
//    age:20,
// }
              //for lopp
// for(var i=1;i<=5;i++)
// {
//   console.log(i)
// }
//proper output for array

// for(let i=0;i<2;i++)
// {
//   console.log(obj[i])
// }
//output undefined for object
 
             //forof loop

// for(let i of arr){
//   console.log(i)
// }
//proper work for array

// for(let i of obj){
//   console.log(i)
// }
//wrror not iterable for object

          //forin loop

// for(i in arr){
//   console.log(i)
// }
//proper work

// for(i in obj){
//   console.log(i)
// }
//proper work

             //console work

// console.dir(window.document)
// console.dir(window)

// console.log(window.document)
// console.log(window)

// const result=document.getElementsByTagName('h4')
// console.log(result)


// const result=document.getElementById('p1')
// console.log(result)

// const result=document.querySelector('h3#ht2')
// console.log(result)

// const result=document.querySelectorAll('h3#ht2')
// console.log(result)

// const res=document.getElementById("ht1")
// res.innerText="hello world"
// console.log(res)

// const res=document.getElementById("ht1")
// res.innerHTML="hello world"
// console.log(res)

// const result=document.getElementsByTagName('div')
// result[0].innerText="<h4>my name is jatin</h4>"
// console.log(result)

// const result=document.getElementsByTagName('div')
// result[0].innerHTML="<h4>my name is jatin</h4>"
// console.log(result)


// const res=document.createElement("h3");
// res.innerText="Dynamic text";
// const firstdiv=document.getElementsByTagName("h3")
// firstdiv[0].appendChild(res)

// const res2=document.createElement("div");
// res2.innerText="Dynamic text2";
// const firstdiv1=document.getElementsByTagName("div")
// firstdiv1[0].appendChild(res2)
// firstdiv1[0].removeChild(res2)                                  


// const firstdiv1=document.getElementsByTagName("div")
// console.log(firstdiv1[0])   
// firstdiv1[0].remove()

                         

const express=require("express")
const app=express()
app.get('/home',(req,res)=>{
  res.send('<h1>jatin</h1>')
})
app.post('/home',(req,res)=>{
    res.send('<h1>pratham</h1>')
  })
  app.patch('/home',(req,res)=>{
    res.send('<h1>sam</h1>')
  })
  app.delete('/home',(req,res)=>{
    res.send('<h1>prashant</h1>')
  })
app.listen(1700)




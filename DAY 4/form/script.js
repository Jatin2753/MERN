// const firstnamechange=(e)=>{
//    const val=e.target.value
//    if(val.length>3)
// {
//     console.log(val)
// }
// }
const submitform=(e)=>{
//    console.log(e)
   e.preventDefault();
   const t=e.target
   const res={
    hobbies:[]
   };
   for(let i=0;i<t.length;i++)
   {
    // console.log(t[i].value,t[i].type)
   
    const ty=t[i].type;
    const vl=t[i].value;
    const nm=t[i].name;
    if(ty!='submit'){
        
        if(ty=='checkbox'&& t[i].checked)
        {
        res.hobbies.push(vl)
        }
        if(ty!='checkbox')
        {
            res[nm]=vl;
        }
       } 
   
   
    console.log(ty,vl,nm)
   
    if(ty=='checkbox')
    {
        console.log(t[i].checked)
    }  
    
   }
   console.log(res)
 }
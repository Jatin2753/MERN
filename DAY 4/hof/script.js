function sum(a,b,fun){
    const ans= a+b;
    fun(ans)
}
function print(x){
    console.log('       ****',x,'****       ');
}
sum(3,4,print)
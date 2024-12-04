// API-APPLICATION PROGRAMMING INTERFACE()
//PROMISES has two state resolve and reject and aslo callback function,.then,.catch
let promise=new Promise((resolve, reject)=>{
    setTimeout(function(){
        console.log('hii');
    },3000);
    //resolve(1);
    reject(new Error('it throws error'));
});
console.log('manu');
 promise.catch((errror)=>{
     console.log('error');
 });
// promise.then((value)=>{
//     console.log(value);
// });

// async await function
async function abcd()
{
    return "yeah!"
}
console.log(abcd());

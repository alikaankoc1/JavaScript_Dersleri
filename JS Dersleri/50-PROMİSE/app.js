let check = true;
const promise1 = new Promise((resolve, reject)=>{
    if(check){
        console.log("Promise başarılı");
    }else{
        console.log("Promise başarısız");
    }
})
console.log(promise1);
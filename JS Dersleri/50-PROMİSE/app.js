let check = true;
const promise1 = new Promise((resolve, reject)=>{
    if(check){
        resolve("Promise başarılı");
    }else{
        reject("Promise başarısız");
    }
})
console.log(promise1);


// promise example

const result = false;

function createPromise(){
    return new Promise((resolve,reject)=>{
        if(result){
            resolve("Promise yapısı çalıştı");
        }else{
            reject("Promise yapısı başarısız oldu.");
        }
    })
}
createPromise()
.then((data)=>console.log(data))
.catch((err)=>console.log(err))
.finally((final)=> console.log("Her zaman çalışır"))
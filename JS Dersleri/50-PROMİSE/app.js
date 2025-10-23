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

// example promise-2


function readyPerson(url){
    return new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();
        try {
            xhr.addEventListener("readystatechange",()=>{
                if(xhr.readyState === 4 && xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                }
            })
        } catch (error) {
            reject(error);
        }
        xhr.open("GET",url)
        xhr.send()
    })
}
readyPerson("person.json")
.then((data)=>console.log(data))
.catch((err)=>console.log(err))
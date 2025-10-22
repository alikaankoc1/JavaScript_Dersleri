// CallBack: asenkronu senkrona çevirmeye yarar

function getName(parametre){
    setTimeout(()=>{
console.log("Ali Kaan ");
parametre();
    },2000)
}

function getSurname(){
    setTimeout(() => {
        console.log("Koç");
    }, 1500);
}

getName(getSurname)

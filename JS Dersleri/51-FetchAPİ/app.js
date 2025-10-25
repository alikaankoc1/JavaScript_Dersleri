function getPerson(url){
 fetch(url)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>console.log(data))
    .then((err)=>console.log(err));
 
}
getPerson("person.json");
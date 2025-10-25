function getPerson(url){
 fetch(url)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>console.log(data))
    .then((err)=>console.log(err));
 
}
getPerson("person.json");

function getData(url){
    fetch(url)
    .then((response)=> response.json())
    .then((data)=>console.log(data))
    .then((err)=>console.log(err))
}
getPerson("https://jsonplaceholder.typicode.com/todos");

function getPost(url){
    fetch(url)
    .then((response)=> response.json())
    .then((data)=> console.log(data))
    .then((err)=> console.log(err))
}
getPost("https://jsonplaceholder.typicode.com/posts/1/comments");
// klavye events

// keypress : harf ve sayılarda 

// document.addEventListener("keypress",run);

// function run(e){
//     console.log(e.key)
// }

// keydown: tüm klavye karakterlerde 

// document.addEventListener("keydown",run2);

// function run2(e){
//     console.log(e.keyCode);
//     if(e.keyCode == 116){
//         alert("f5 tuşuna basıldı");
//     }
//     e.preventDefault();
// }

// keyup: tuştan elini kaldırdığında çalışır

// document.addEventListener("keyup",run3);
// function run3(e){
//     console.log(e.key);
// }

// example 

const input = document.querySelector("#todoName");

input.addEventListener("keypress",run);

function run(e){
    console.log(e.target.value);
}
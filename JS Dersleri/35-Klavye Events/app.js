// klavye events

// keypress : harf ve sayılarda 

document.addEventListener("keypress",run);

function run(e){
    console.log(e.key)
}

// keydown: tüm klavye karakterlerde 

document.addEventListener("keydown",run2);

function run2(e){
    console.log(e.key);
}
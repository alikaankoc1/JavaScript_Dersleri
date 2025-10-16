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

// keyup: tuştan elini kaldırdığında çalışır

document.addEventListener("keyup",run3);
function run3(e){
    console.log(e.key);
}
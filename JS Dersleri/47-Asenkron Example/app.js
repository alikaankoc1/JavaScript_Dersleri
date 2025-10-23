const users = [
    {
        userId: 5,
        post : "Ali post 1"
    },
    {
        userId: 5,
        post: "Ali post 2"
    },
    {
        userId: 3,
        post: "Hasan post 1"
    },
    {
        userId: 4,
        post: "Kaan post 1"
    }
]

function getUserId(callback){
    setTimeout(() => {
        let userId= 5;
        // return 5;
        callback(userId);
    }, 1000);
}

function getPostByUserId(userId){
    console.log(userId)
    setTimeout(()=>{
        users.forEach((user)=>{
            if(user.userId === userId){{
                console.log(user.post);
            }}
            
        })
    },500)
}

getUserId(getPostByUserId);



// AJAX
const xhr = XMLHttpRequest();
console.log(xhr);
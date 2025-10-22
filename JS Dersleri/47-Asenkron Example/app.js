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

function getUserId(){
    setTimeout(() => {
        return 5;
    }, 1000);
}

function getPostByUserId(userId){
    console.log(userId)
    setTimeout(()=>{
        users.foreach((user)=>{
            if(user.userId === userId){{
                console.log(user.post);
            }}
            
        })
    },500)
}

let userId = getUserId();
 getPostByUserId(userId);



const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "avatar-vangogh.png",
        post: "post-vangogh.png",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "avatar-courbet.png",
        post: "post-courbet.png",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "avatar-ducreux.png",
        post: "post-ducreux.png",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


const feedEl = document.querySelector("#feed")
feedEl.addEventListener("click", render())

function render(){
    console.log("clicked")
    let feeds = ""
    posts.forEach(item => {
        const template = insertDataIntoTemplate(item)
        feeds += template
    })

    feedEl.innerHTML = feeds
}


function insertDataIntoTemplate(postInfo){
    let postTemplate = `
        <section>
            <div class="post-top">
                <img src="./assets/${postInfo.avatar}" alt=${postInfo.avatar}} class="post-user-avatar" />
                <div class="post-user-info">
                    <h2>${postInfo.name}</h2>
                    <span>${postInfo.location}</span>
                </div>
            </div>
                
            <img src="./assets/${postInfo.post}" alt=${postInfo.post} class="post-img" />
                
            <div class="post-bottom">
                <div class="post-activity">
                    <img src="./assets/like.png" alt="like post" />
                    <img src="./assets/like.png" alt="comment" />
                    <img src="./assets//share.png" alt="share post" />
                </div>
                <span class="bold">${postInfo.likes} likes</span>
                <p><span class="bold">${postInfo.username}</span>${postInfo.comment}</p>
            <div>
        </section>
    `
    return postTemplate
}




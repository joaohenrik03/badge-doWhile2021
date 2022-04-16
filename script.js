const socialsUsers = {
    github: "joaohenrik03",
    youtube: "channel/UCH-TLNuX0ry45YCVyuXwXOA",
    instagram: "_joaohenrik/",
    facebook: "joaohenrik.signorizilch.7",
    twitter: ""
}

function socialLinks() {
    const socialLinks = document.querySelector("#socialLinks")

    for (let li of socialLinks.children) {
        const socialName = li.getAttribute('class')
        li.children[0].href = `https://www.${socialName}.com/${socialsUsers[socialName]}`
    }
}

function getGithubInfosUser() {
    const url = `https://api.github.com/users/${socialsUsers.github}`
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        document.querySelector("#userPhoto").src = data.avatar_url
        document.querySelector("#userName").textContent = data.name
        document.querySelector("#userBio").textContent = data.bio
        document.querySelector("#userUrl").href = data.html_url
        document.querySelector("#userLogin").textContent = data.login
    })
}

socialLinks()
getGithubInfosUser()
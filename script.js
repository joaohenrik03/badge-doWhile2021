const socialsUsers = {
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

socialLinks()
const api_url  = "https://api.github.com/users/"
const main = document.querySelector("main");
const form = document.querySelector("form");
const search = document.getElementById("search");

getUser("minkatan");


async function getUser(user) {
    const resp = await fetch(api_url + user);
    const respData = await resp.json()

    createUserCard(respData)
    
    getRepo(user)
}

async function getRepo(user) {
    const resp = await fetch(api_url + user + "/repos");
    const respData = await resp.json()

    addRepo(respData)
}

function createUserCard(user) {
    const card = 
    `
    <div class="card">
        <div>
            <img class="avatar" src="${user.avatar_url}" alt ="${user.name}"/>
        </div>
        <div class="user-info">
            <h2>${user.name}</h2>
            <p>${user.bio}</p>
            <ul class="info">
                <li><strong>Followers</strong>${user.followers}</li>
                <li><strong>Following</strong>${user.following}</li>
                <li><strong>Repository</strong>${user.public_repos}</li>
            </ul>

            <ul class="repos" id="repos">
            </ul>
        </div>
    </div>
    `

    main.innerHTML = card;
}

form.addEventListener("submit", (e) => { 
    e.preventDefault();

    const user = search.value;

    if(user) {
        getUser(user);
        search.value=""
    }
});

function addRepo(repos) {
    
    const reposEl = document.getElementById("repos");

    repos.forEach(repo => {
        const repoEl = document.createElement("a");
        repoEl.classList.add("repo");

        repoEl.href = repo.html_url;
        repoEl.innerText = repo.name;
        repoEl.target ="blank";

        reposEl.appendChild(repoEl);
    })
}
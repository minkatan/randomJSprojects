class UI {
    constructor() {
        this.profile = document.getElementById('user-profile')
    }

    showProfile(user) {
        this.profile.innerHTML = `
            <div class=" bg-slate-200 mb-3 w-full">
            <div class="w-full">
                <div class='flex flex-col justify-center items-center m-4'>
                    <img class="mb-4" src="${user.avatar_url}" />
                    <a href="${user.html_url}" class="bg-sky-600 text-white px-4 py-1 w-1/3 text-center">View Profile</a>
                </div>
                <div class="flex flex-col items-start justify-start bg-slate-700 text-white m-2 p-4">
                    <h3 class="text-xl font-bold mb-2">Bio</h3>
                    <p>${user.bio === null ? '' : user.bio}</p>
                </div>
                <div class="flex flex-row justify-evenly text-white text-sm">
                    <span class="bg-lime-300 text-gray-600 p-2">Public Repos: ${user.public_repos}</span>
                    <span class="bg-green-500 p-2">Public Gists: ${user.public_gists}</span>
                    <span class="bg-emerald-700 p-2">Followers: ${user.followers}</span>
                    <span class="bg-teal-900 p-2">Following: ${user.following}</span>
                </div>
                <div class="flex flex-col items-center justify-center text-left m-2 p-2">
                    <ul class="border bg-slate-50 md:w-1/3 list-none">
                        <li class="p-1 border-b-4 border-sky-900">Name: ${user.name}</li>
                        <li class="p-1 border-b-4 border-sky-900">Company: ${user.company === null ? '' : user.company}</li>
                        <li class="p-1 border-b-4 border-sky-900">Website: ${user.blog}</li>
                        <li class="p-1 border-b-4 border-sky-900">Location: ${user.location}</li>
                    </ul>
                </div>
            </div>
        </div>
            <h3>Latest Repos</h3><div id="repos"></div>
        </div>
        `;
    }

    clearProfile() {
        this.profile.innerHTML = '';
    }

    showRepos(repos) {
        let output = '';

        repos.forEach(function(repo) {
            output += `
            <div class="flex flex-col text-sm border border-solid border-gray-400 my-4 p-4"> 
                <div class="flex flex-row items-center w-full">
                    <div class="w-full text-center">
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class="w-full flex flex-row justify-end items-end gap-4 text-white p-2">
                        <span class="bg-lime-300 text-gray-600 p-2 mx-2 text-left">Stars: ${repo.stargazers_count}</span>
                        <span class="bg-green-500 p-2 mx-2 text-left">Watcher: ${repo.watchers_count}</span>
                        <span class="bg-teal-900 p-2 mx-2 text-left">Forks: ${repo.forks_count}</span>
                    </div>
                </div>
            </div>     
            `;
        })

        document.getElementById('repos').innerHTML = output
    }

    showAlert(msg, className) { 
        // clear alert before start
        this.clearAlert();
        // create div + class
        const div = document.createElement('div');
        div.className = className;
        div.setAttribute('id','alert')

        div.appendChild(document.createTextNode(msg))

        // get parent / insert container
        const container = document.getElementById('search-container')
        const search = document.getElementById('search')

        container.insertBefore(div,search);

        setTimeout(() => {
            this.clearAlert();
        }, 3000)
    }

    clearAlert() {
        const currentAlert = document.getElementById('alert')

        if(currentAlert){
            currentAlert.remove();
        }
    }
}
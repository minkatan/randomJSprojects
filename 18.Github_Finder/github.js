class Github {
    constructor() {
        
    }

async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}`);
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=5&sort=created:asc`);

    const profileData = await profileResponse.json();
    const repoData = await repoResponse.json();

    return {
        profile: profileData,
        repos: repoData
    }
}
}


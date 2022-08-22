const github = new Github
const ui = new UI


const searchUser = document.getElementById('search-user')

searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;

    if(userText !== '') {
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    // show user not found
                    ui.showAlert('User Not Found','bg-red-800 text-white font-bold text-center')
                    ui.clearProfile()
                } else {
                    // show the profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })
    }else {
        // clear the profile
        ui.clearProfile();
    }
});
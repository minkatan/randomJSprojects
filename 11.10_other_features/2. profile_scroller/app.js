const data = [
    {
      name: 'John Doe',
      age: 32,
      gender: 'male',
      lookingfor: 'female',
      location: 'Boston MA',
      image: 'https://randomuser.me/api/portraits/men/82.jpg'
    },
    {
      name: 'Jen Smith',
      age: 26,
      gender: 'female',
      lookingfor: 'male',
      location: 'Miami FL',
      image: 'https://randomuser.me/api/portraits/women/82.jpg'
    },
    {
      name: 'William Johnson',
      age: 38,
      gender: 'male',
      lookingfor: 'female',
      location: 'Lynn MA',
      image: 'https://randomuser.me/api/portraits/men/83.jpg'
    }
  ];

const profiles = profileIterator(data);

// call 1st profile
nextProfile()

document.getElementById('next').addEventListener('click', nextProfile);

function nextProfile(){
    const currentProfile = profiles.next().value;

    if (currentProfile != undefined) {
        document.getElementById('profile-display').innerHTML = `
        <ul class="list-none">
            <li>Name: ${currentProfile.name}</li>
            <li>Age: ${currentProfile.age}</li>
            <li>Location: ${currentProfile.location}</li>
            <li>Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor} </li>
        </ul>
        `
    
        document.getElementById('image-display').innerHTML=`<img src="${currentProfile.image}">`
    } else {
        // no more profile
        window.location.reload()
    }
}

// profile iterator

function profileIterator(profiles){
    let nextIndex = 0;

    return {
        next: function() {
            return nextIndex < profiles.length ? {value: profiles[nextIndex++], done: false} :
            {done: true}
        }
    };
}
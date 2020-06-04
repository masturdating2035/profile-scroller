const data = [{
        name: 'ali gh',
        age: 28,
        gender: 'male',
        lookingfor: 'female',
        location: 'Tehran',
        image: 'https://randomuser.me/api/portraits/men/97.jpg'
    },
    {
        name: 'pari sh',
        age: 30,
        gender: 'female',
        lookingfor: 'male',
        location: 'Rasht',
        image: 'https://randomuser.me/api/portraits/women/1.jpg'
    },
    {
        name: 'mamad gh',
        age: 20,
        gender: 'male',
        lookingfor: 'female',
        location: 'Yazd',
        image: 'https://randomuser.me/api/portraits/men/45.jpg'
    }
];


function profileIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length ? {
                value: profiles[nextIndex++],
                done: false
            } : {
                done: true
            }
        }
    };
}



const profiles = profileIterator(data);
nextProfile();



document.getElementById('next').addEventListener('click', nextProfile);

function nextProfile() {
    const currentProfile = profiles.next().value;
    if (currentProfile !== undefined) {
        document.getElementById('profileDisplay').innerHTML = `
        <ul class="list-group">
            <li class="list-group-item">Name: ${currentProfile.name}</li>

            <li class="list-group-item">Age: ${currentProfile.age}</li>

            <li class="list-group-item">Location: ${currentProfile.location}</li>

            <li class="list-group-item">Gender: ${currentProfile.gender}</li>

            <li class="list-group-item"> Looking For: ${currentProfile.lookingfor}</li>
        </ul>
    `;

        document.getElementById('imageDisplay').innerHTML = `
        <img src="${currentProfile.image}">
    `
    } else {
        window.location.reload();
    }
}




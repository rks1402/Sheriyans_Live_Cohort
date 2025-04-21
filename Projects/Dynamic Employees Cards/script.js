const softwareEngineers = [
    {
      name: "Aarav Mehta",
      designation: "Frontend Developer",
      intro: "Passionate about building responsive and user-friendly interfaces.\nAlways exploring new UI trends and design patterns.",
      skills: ["React", "CSS"],
      profilePic: "https://images.unsplash.com/photo-1475403614135-5f1aa0eb5015?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friendshipStatus: "Stranger"
    },
    {
      name: "Sana Khan",
      designation: "Backend Engineer",
      intro: "Loves working with servers and optimizing APIs for performance.\nBelieves clean architecture is the foundation of good software.",
      skills: ["Node.js", "PostgreSQL"],
      profilePic: "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friendshipStatus: "Stranger"
    },
    {
      name: "Rohan Gupta",
      designation: "Full Stack Developer",
      intro: "Enjoys creating end-to-end web applications from scratch.\nComfortable switching between frontend and backend tasks.",
      skills: ["MongoDB", "Express.js"],
      profilePic: "https://images.unsplash.com/photo-1584940121258-c2553b66a739?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friendshipStatus: "Stranger"
    },
    {
      name: "Isha Verma",
      designation: "DevOps Engineer",
      intro: "Focused on automating deployment and ensuring system reliability.\nLoves working with CI/CD pipelines and cloud infrastructure.",
      skills: ["Docker", "AWS"],
      profilePic: "https://plus.unsplash.com/premium_photo-1674777843430-3c0413584110?q=80&w=3300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friendshipStatus: "Stranger"
    },
    {
      name: "Kunal Desai",
      designation: "Mobile App Developer",
      intro: "Builds performant and beautiful mobile experiences.\nStrives to keep apps lightweight, fast, and intuitive. fast, and intuitive.",
      skills: ["Flutter", "Firebase"],
      profilePic: "https://plus.unsplash.com/premium_photo-1672006778196-d43338450c08?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friendshipStatus: "Stranger"
    },
    {
        name: "Isha Verma",
        designation: "DevOps Engineer",
        intro: "Focused on automating deployment and ensuring system reliability.\nLoves working with CI/CD pipelines and cloud infrastructure.",
        skills: ["Docker", "AWS"],
        profilePic: "https://plus.unsplash.com/premium_photo-1674777843430-3c0413584110?q=80&w=3300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        friendshipStatus: "Stranger"
    },
];

let main = document.querySelector('.main')

function updateCards(arr){
    let sum = '';
    arr.forEach((elem, idx) => {
        let card = `<div class="card">
                    <img src="${elem.profilePic}" alt="">
                    <div class="name">
                    <h2 class="emp-name">Rahul Sharma</h2>
                    <h6 class="emp-friend-status">(${elem.friendshipStatus})</h6>
                    </div>
                    <h4 class="emp-designation">${elem.designation}</h4>
                    <p class="emp-intro">${elem.intro}</p>
                    <div class="skills">
                    <h5 class="emp-skill">${elem.skills[0]}</h5>
                    <h5 class="emp-skill">${elem.skills[1]}</h5>
                    </div>
                    <button id="${idx}">Add Friend</button>
                    </div>`;

        sum += card;            
    });

    main.innerHTML = sum;
}

updateCards(softwareEngineers);

main.addEventListener('click', (ele) => {
    let emp = softwareEngineers[ele.target.id];

    if(emp.friendshipStatus == "Stranger"){
        emp.friendshipStatus = "Friend";
    }else{
        emp.friendshipStatus = "Stranger";
    }
    updateCards(softwareEngineers);
})
  
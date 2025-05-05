let searchBtn = document.querySelector(".search");
let usernameinp = document.querySelector(".usernameinp");
let container = document.querySelector(".container");

function getProfileData(username){
    return fetch(`https://api.github.com/users/${username}`).then(raw => {
        if(!raw.ok) throw new Error ("User not found!");
        return raw.json();
    });
}

function getRepos(username){
    return fetch(`https://api.github.com/users/${username}/repos?sort=updated`).then(raw => {
        if(!raw.ok) throw new Error ("Failed to fetch repos!");
        return raw.json();
    });
}

function decorateProfileData(details){
    let data = `<div class="flex items-center gap-4">
          <div class="w-20 h-20"><img class="rounded-full" src="${details.avatar_url}" /></div>
          <div>
            <h2 class="text-xl font-semibold">${details.name}</h2>
            <p class="text-sm text-gray-600 dark:text-gray-400">@${details.login}</p>
          </div>
        </div>
        <p class="text-gray-700 dark:text-gray-300">
            ${details.bio ? details.bio : "Sorry, There is no bio..."}
        </p>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
          <div>
            <p class="text-lg font-bold">${details.public_repos}</p>
            <p class="text-sm text-gray-500 dark:text-gray-400">Repos</p>
          </div>
          <div>
            <p class="text-lg font-bold">${details.followers}</p>
            <p class="text-sm text-gray-500 dark:text-gray-400">Followers</p>
          </div>
          <div>
            <p class="text-lg font-bold">${details.following}</p>
            <p class="text-sm text-gray-500 dark:text-gray-400">Following</p>
          </div>
        </div>
        <div class="text-sm text-gray-600 dark:text-gray-400">
          <p>Location: <span class="font-medium">${details.location ? details.location : "N/A"}</span></p>
          <p>Website: <a href="#" class="text-blue-600 dark:text-blue-400 hover:underline">${details.html_url}</a></p>
        </div>`

    container.innerHTML = data;
}

searchBtn.addEventListener('click', ()=>{
    let username = usernameinp.value.trim();
    if(username.length > 0){
        getProfileData(username).then(data => {
            decorateProfileData(data);
            console.log(data);
        });
    }else{
        alert();
    }
})
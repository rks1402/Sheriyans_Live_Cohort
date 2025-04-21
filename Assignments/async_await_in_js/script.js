// Practicing Promises

/*
function getUser(username, age){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${username}, age ${age}`);
        }, 3000)
    });
}

getUser("Rahul", 22).then((data) => {
    console.log(data);
})
*/

// Error handeling in Promises

/*
function checkAge(age){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(age >= 18){
                resolve("You are eligible");
            }else{
                reject("You are underage");
            }
        }, 2000);
    });
}

checkAge(10).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
})
*/

// Async/await 

/*
function checkAge(age){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(age >= 18){
                resolve("You are eligible");
            }else{
                reject("You are underage");
            }
        }, 2000);
    });
}

async function verifyAge() {
    try{
        let result = await checkAge(15);
        console.log(result);
    }
    catch(error){
        console.log(error);
    }
}

verifyAge();
*/

// Pracitcing Async/await

/*
function getUser(username) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(username);
        }, 2000);
    });
}

function getPosts(username) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([`${username}'s post 1`, `${username}'s post 2`]);
        }, 1000);
    });
}


async function showUserData() {
    let username = await getUser("Rahul")
    console.log(username);
    let posts = await getPosts(username);
    posts.forEach(element => {
        console.log(element);
    });
}

showUserData();
*/


// Using fetch() with async/await - Hitting API.

/*
async function fetchUserData(){
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        let data = await response.json();
        console.log(data.name);
        console.log(data.username);
        console.log(data.email);
    }
    catch(error){
        console.log(error);
    }
}

fetchUserData();
*/

// Async/await - Mini Project - Random Quote Display

async function getQuote() {
    try {
      const response = await fetch("http://api.quotable.io/random"); // http is used (not https) because the certificate is expired
      const data = await response.json();

      document.getElementById("quote").textContent = `"${data.content}"`;
      document.getElementById("author").textContent = `— ${data.author}`;
    } catch (error) {
      document.getElementById("quote").textContent = "Failed to fetch quote.";
      document.getElementById("author").textContent = "";
      console.error(error);
    }
  }

getQuote();

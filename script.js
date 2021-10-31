let root = document.getElementById("root");



const makeList = (name,dp)=>{

    console.log(dp)

    return `
    
    
    <div  style="width: 18rem;">
    <a href="#${name}">
  <img src="${dp}" class="card-img-top" alt="...">
  <h4>${name}</h4>
  
  </a>
</div>

    `
}

async function callApi(username){

     const data = await fetch(`https://api.github.com/users/${username}/followers`);
     const followers  = await data.json()
     console.log(followers)

     followers.map(user=>{
         const list = makeList(user.login,user.avatar_url)
         root.innerHTML +=list 
     })
}

window.addEventListener('hashchange',()=>{
    const username = location.hash.split("#")[1]
    root.innerHTML = ""
    callApi(username)
})

callApi("alita")

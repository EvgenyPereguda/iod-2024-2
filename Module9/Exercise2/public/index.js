
let currentUser = {};



function clearList(target) {
        
    const root = document.getElementById(target);

    while (root.firstChild) {
      root.removeChild(root.lastChild);
    }
}

async function showCreateNewUserFormDIalog(){

  const dialog = document.querySelector("dialog");

  clearList("container");

  const container = dialog.querySelector("#container");

  const template = document.getElementById("createUserPanel-template").content.cloneNode(true);

  container.appendChild(template);

  dialog.showModal(); 
}

async function showCreateNewPostFormDialog(){

  const dialog = document.querySelector("dialog");

  clearList("container");

  const container = dialog.querySelector("#container");

  const template = document.getElementById("createPostPanel-template").content.cloneNode(true);

  template.getElementById("userNameLbl").innerText += currentUser.userName;

  container.appendChild(template);

  dialog.showModal(); 
}

function showCreateNewLikeFormDialog(postId){

  const dialog = document.querySelector("dialog");

  clearList("container");

  const container = dialog.querySelector("#container");

  const template = document.getElementById("createLikePanel-template").content.cloneNode(true);

  template.getElementById("userNameLbl").innerText += currentUser.userName;
  
  const likeBtnDiv = template.getElementById("likeBtnDiv");


  var node = document.createElement("BUTTON");
  var textnode = document.createTextNode("Create new like!");
  node.appendChild(textnode);
  node.setAttribute("type", "button");
  node.setAttribute("onclick", "submitCreateNewLikeForm(" +`'${postId}'`+")");
  likeBtnDiv.appendChild(node);
  

  container.appendChild(template);

  dialog.showModal(); 
}



async function submitCreateNewUserForm() {

  const dialog = document.querySelector("dialog");

  const form = document.querySelector("#createNewUserForm");

  // Associate the FormData object with the form element
  const formData = new FormData(form);

  const data = JSON.stringify(Object.fromEntries(formData));
  
  try {
    const response = await fetch("/api/users/create", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: data
    });
    console.log(await response.json());
  } catch (e) {
    console.error(e);
  }

  dialog.close();

  loadUsers();
}


async function submitCreateNewPostForm() {

  const dialog = document.querySelector("dialog");

  const form = document.querySelector("#createNewPostForm");

  // Associate the FormData object with the form element
  const formData = new FormData(form);

  let json = Object.fromEntries(formData);
  
  Object.assign(json, { "userId": `${currentUser.userId}` });
  
  let data = JSON.stringify(json);

  console.log(data);
  
  try {
    const response = await fetch("/api/posts/create", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: data
    });
    console.log(await response.json());
  } catch (error) {
    alert(`Response status = ${error.status}, message ${error.statusText}`);
  }

  dialog.close();

}


async function submitCreateNewLikeForm(postId) {

  const dialog = document.querySelector("dialog");

  const form = document.querySelector("#createNewLikeForm");
  
  const formData = new FormData(form);

  let json = Object.fromEntries(formData);
  
  Object.assign(json, { "userId": `${currentUser.userId}`, "postId": `${postId}` });
  
  let data = JSON.stringify(json);

  console.log(data);
  
  try {
    const response = await fetch("/api/likes/create", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: data
    });
    console.log(await response.json());
  } catch (error) {
    alert(`Response status = ${error.status}, message ${error.statusText}`);
  }

  dialog.close();
}

async function loadUsers(){
  
  clearList("usersList");
  
  const users = new Array();

  await fetch("http://localhost:8080/api/users/")
  .then((response) => response.json())
  .then((json) => {
    json.data.forEach((item) => {   
      placeUserItem(item.firstName, item.lastName, item._id);
    });
  })
  .catch((response) => {      
    alert(`Response status = ${response.status}, message ${response.statusText}`);
  });

}

function placeUserItem(firstName, lastName, _id) {

  const template = document.querySelector("#userItem-template").content.cloneNode(true);
 
  var node = document.createElement("BUTTON");
  var textnode = document.createTextNode(`${firstName} ${lastName}`);
  node.appendChild(textnode);
  node.setAttribute("type", "button");
  node.setAttribute("onclick", "showUserPosts('" +`${firstName} ${lastName}` + "', '" +`${_id}`+"')");
  template.querySelector("#userItemContent").appendChild(node);

  document.querySelector("#usersList").appendChild(template);

}

function showUserPosts(userName, id){

  currentUser = {userName: `${userName}`, userId: `${id}`};

  loadPosts(id);

  document.getElementById("addPostBtn").disabled = false;

  document.getElementById("currentUserPresenter").innerText = userName;
  

}



async function loadPosts(id = 0){
  
  clearList("postsList");

  clearList("allPostsList"); 
  
  const users = new Array();

  
  if(id == 0)
    currentUser = {};

  document.getElementById("addPostBtn").disabled = true;

  await fetch(`http://localhost:8080/api/posts`)
  .then((response) => response.json())
  .then((json) => {
    json.data.forEach((item) => { 
      placePostItem("allPostsList", item._id, item.Title, item.Description, item.Image, item.userId.firstName, item.userId.lastName);
    });
  })
  .catch((response) => {      
    alert(`Response status = ${response.status}, message ${response.statusText}`);
  });
  

  if(id != 0)
  {
    await fetch(`http://localhost:8080/api/users/${id}?posts`)
    .then((response) => response.json())
    .then((json) => {
      json.data.forEach((item) => { 
        placePostItem("postsList", item._id, item.Title, item.Description, item.Image, item.userId.firstName, item.userId.lastName);
      });
    })
    .catch((response) => {      
      alert(`Response status = ${response.status}, message ${response.statusText}`);
    });
  }

}
  
function placePostItem(target, postId, title, description, image, firstName, lastName) {

  const template = document.querySelector("#postItem-template").content.cloneNode(true);
 
  template.getElementById("postTitle").innerText = title;
 
  template.getElementById("postContent").innerText = description;
 
  template.getElementById("postAuthor").innerText += ` ${firstName} ${lastName}`;

  template.getElementById("postImage").src = image;
  

  let userId = currentUser.userId;
  
  var node = document.createElement("BUTTON");
  var textnode = document.createTextNode("Like it!");
  node.appendChild(textnode);
  node.setAttribute("type", "button");
  node.setAttribute("onclick", "showCreateNewLikeFormDialog(" +`'${postId}'`+")");
  node.disabled = userId === undefined;
  template.querySelector("#likeIt").appendChild(node);
  
  const liketarget = template.getElementById("likesList");

  loadLikes(liketarget, postId);

  document.querySelector(`#${target}`).appendChild(template);

}

async function loadLikes(target, id){

  if(id != 0)
    {
      await fetch(`http://localhost:8080/api/posts/${id}?likes`)
      .then((response) => response.json())
      .then((json) => {
        json.data.forEach((item) => { 
          placeLikeItem(target, item.Comment, item.userId.firstName, item.userId.lastName);
        });
      })
      .catch((response) => {      
        alert(`Response status = ${response.status}, message ${response.statusText}`);
      });
    }
}

function placeLikeItem(target, Comment, firstName, lastName) {

  const template = document.querySelector("#likeItem-template").content.cloneNode(true);
  
  template.getElementById("likeContent").innerText = Comment;
 
  template.getElementById("likeAuthor").innerText += ` ${firstName} ${lastName}`;
  
  target.appendChild(template);
}



loadUsers();

loadPosts();


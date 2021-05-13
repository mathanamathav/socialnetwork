userList=document.querySelector("#userslist");
const form=document.querySelector("#formdata");

setInterval(() =>{
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "php/available_users.php", true);
  xhr.onload = ()=>{
    if(xhr.readyState === XMLHttpRequest.DONE){
        if(xhr.status === 200){
          let data = xhr.response;
          if(!searchBar.classList.contains("active")){
            userList.innerHTML = data;
          }
        }
    }
  }
  xhr.send();
}, 1000);


//http://localhost/SocialNetwork/chat.php?user_id=58
setInterval(() =>{
    url=window.location.href;
    user_id = location.search.slice(1).split("=")[1];
    document.getElementById("store_to_id").value = user_id;
    
    let xhml = new XMLHttpRequest();
    if(user_id===undefined)
    {
      chatBox.innerHTML='<p style="text-align:center">Select an user to chat</p>';
    }
    else
    {
      xhml.open("POST", "php/get-chat.php", true);
      xhml.onload = ()=>{
        if(xhml.readyState === XMLHttpRequest.DONE){
            if(xhml.status === 200){
              let data = xhml.response;
              console.log(data);
              chatBox.innerHTML = data;  
            }
        }
     }
    let formData = new FormData(form);
    xhml.send(formData);
    }    
}, 100);


form.onsubmit = (e)=>{
    e.preventDefault();
}

//onclick like
function like() 
{
  var like = document.querySelectorAll("#heart");
  var i;
  for (i = 0; i< like.length; i++) {
  like[i].style.visibility = "visible";
  }
}

function send() {
  var usermsg = document.getElementById("send-input").value;
  var senddiv = document.querySelector(".user-input");
  url=window.location.href;
  to_id = location.search.slice(1).split("=")[1]; 
  document.getElementById("to_id").value=to_id;
  let xhr = new XMLHttpRequest();
    xhr.open("POST", "php/insert-chat.php", true);
    xhr.onload = ()=>{
      if(xhr.readyState === XMLHttpRequest.DONE){
          if(xhr.status === 200){
              senddiv.style.display = "block";
              senddiv.innerHTML = usermsg;
              document.getElementById("send-input").value="";
              data=xhr.response;
              console.log(data);
          }
      }
    }
    let formData = new FormData(form);
    xhr.send(formData);
}
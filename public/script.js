/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

console.log("script is running");

const onSubmit = () => {
  console.log("submit button clicked");
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;
  const artist = document.querySelector("#artist").value;
  const title = document.querySelector("#song").value;
  const link = document.querySelector("#link").value;
  
  /*
  
  we need to check if a valid username and password has been entered
  

  */

  const payload = {
    username: username,
    password: password,
    artist: artist,
    title: title,
    link: link
    }
    
  firebase.database().ref().push(payload);
}

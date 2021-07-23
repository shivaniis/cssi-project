const viewSongs = () => {
    const pass = document.querySelector("#password")
    const user = document.querySelector("#username")
    
    const songsRef = firebase.database().ref();
    songsRef.on('value', (snapshot) => {
        const data = snapshot.val();
        let there = false;
        console.log(data);
        for (let key in data) {
            console.log(data[key].username, user.value)
            console.log(data[key].password, pass.value)
           if (data[key].username === user.value && data[key].password === pass.value) {
                console.log("match found");
                there = true;
                let url = data[key].link;
                const songs = document.querySelector("#songs");
                songs.innerHTML += "<iframe src='"+url+"' width='300'"+ 
                "height='380' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>"
            }
        }
        if (!there) {
            const songs = document.querySelector("#songs")
            songs.innerHTML = "<h2 class='subtitle'>Your Username or Password is incorrect, please try again. </h2>"
        }
    })
}

/*let there = false
        console.log(data)
        for (let key in data) {
            if (data[key].passcode === passcode.value) {
                console.log("match found")
                there = true
                const message = document.querySelector("#message")
                message.innerHTML = data[key].message
            }
        }
        if (!there) {
            const message = document.querySelector("#message")
            message.innerHTML = "ERROR: No Message Found"
        }
    })
}*/

/*const viewSongs = () => {
  const songsRef = firebase.database().ref()
  songsRef.on('value', (snapshot) => {
    const data = snapshot.val()
    console.log(data)
    for(let key in data){
      //now append smallest amount of songs
    }
  }) 
}*/
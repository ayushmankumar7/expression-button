const socket = io('http://localhost:3000')

const button = document.querySelector("#but");

socket.on('chat-message', data => {
    console.log(data)
    if (data == "75"){
        var audio = new Audio('music.mp3');
        audio.play();
    }
})

button.addEventListener("click", e=>{
    e.preventDefault()
    console.log("Clicked")
    
    socket.emit("sound1", "75")
})
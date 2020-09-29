const socket = io('http://localhost:3000')

const button = document.querySelectorAll(".hel");
console.log(button[0])

socket.on('chat-message', data => {
    console.log(data)
    if (data == 0){
        var audio = new Audio('assets/sounds/music.mp3');
        audio.play();
    }
    if (data == 1){
        var audio = new Audio('assets/sounds/music1.mp3');
        audio.play();
    }
    if (data == 2){
        var audio = new Audio('assets/sounds/music2.mp3');
        audio.play();
    }
    if (data == 3){
        var audio = new Audio('assets/sounds/music3.mp3');
        audio.play();
    }
    if (data == 4){
        var audio = new Audio('assets/sounds/music4.mp3');
        audio.play();
    }
    if (data == 5){
        var audio = new Audio('assets/sounds/music.mp3');
        audio.play();
    }
})


function butTri(n){
    button[n].addEventListener("click", e=>{
        e.preventDefault()
        console.log("Clicked")
        console.log(n)
        socket.emit("sound1", n)
    })
}



butTri(0)
butTri(1)
butTri(2)
butTri(3)
butTri(4)
butTri(5)

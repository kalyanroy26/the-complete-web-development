let btn = document.querySelectorAll('.drum')

btn.forEach((v) => {
    v.addEventListener('click',function (){
        newEvent = v.innerHTML
        playSound(newEvent)
        addAnimation(newEvent)
    })
})

function playSound(val){
        let audio
        switch (val) {
            case 'w':
                audio = new Audio('./sounds/tom-1.mp3')
                break;
            case 'a':
                audio = new Audio('./sounds/tom-2.mp3')
                break;
            case 's':
                audio = new Audio('./sounds/tom-3.mp3')
                break;
            case 'd':
                audio = new Audio('./sounds/tom-4.mp3')
                break;
            case 'j':
                audio = new Audio('./sounds/snare.mp3')
                break;
            case 'k':
                audio = new Audio('./sounds/crash.mp3')
                break;
            case 'l':
                audio = new Audio('./sounds/kick-bass.mp3')
                break;
        
            default:
                break;
        }
        
        audio.play()
}

document.addEventListener('keydown',(e)=>{
    playSound(e.key)
    addAnimation(e.key)
})

function addAnimation(currentKey){
    let activeButton = document.querySelector("."+currentKey)
    activeButton.classList.add('pressed')  
    
    setTimeout(() => {
        activeButton.classList.remove('pressed')          
    }, 100);
    
}
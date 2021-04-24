//Vi fortæller her hvor mange og hvilke knapper, der er. 
var numberOfButtons = document.querySelectorAll(".drum").length; 

for(let i = 0; i < numberOfButtons; i++){
  
    //Her sørger vi for at systemet "lytter" og reagerer med en lyd og animation, når der bliver klikket på et bogstav. 
   document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        let buttonInnerHTML = this.innerHTML;  

        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML)
        
   })

}


document.addEventListener("keypress", function(event){
  
    makeSound(event.key)
    console.log(event.key);
})

//Vi sørger for at der kommer lyd på trommerne.
function makeSound(key){

//Vi tilføjer de forskellige lyde til de forskellige bogstaver. Switch er det samme som if/else
switch (key) {
    case "w":
        let tom1 = new Audio("sounds/tom-1.mp3"); 
        tom1.play();
        break;

        case "a":
        let tom2 = new Audio("sounds/tom-2.mp3"); 
        tom2.play();
        break;

        case "s":
        let tom3 = new Audio("sounds/tom-3.mp3"); 
        tom3.play();
        break;

        case "d":
        let tom4 = new Audio("sounds/tom-4.mp3"); 
        tom4.play();
        break;

        case "j":
        let snare = new Audio("sounds/snare.mp3"); 
        snare.play();
        break;

        case "k":
        let kick = new Audio("sounds/kick-bass.mp3"); 
        kick.play();
        break;

        case "l":
        let crash = new Audio("sounds/crash.mp3"); 
        crash.play();
        break;

//Hvis man klikker på en anden tast end wasdjkl, så kommer denne besked frem. 
    default:
        console.log("Intet bogstav passer, derfor default")
        break;
}

}

//Vi tilføjer animation til knapperne, så man kan se, hvilken der bliver trykket på. 
function buttonAnimation(currentKey){
    let activeButton = document.querySelector("." + currentKey)

    activeButton.classList.add("pressed"); 

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100)
}
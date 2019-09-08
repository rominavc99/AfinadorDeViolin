const buttons = document.querySelectorAll('button'); //agarra todos los elementos que sean button

const playnote = event=> //recibe un parametro llamado event

{
    const button = event.target; //recibe parametro en la funcion
    const note = button.dataset.note; 
    const audioId = `audio${note}`;
    
    const audio= document.getElementById(audioId);
    console.log(audio);
    audio.play();
}

buttons.forEach
(
    button=> button.addEventListener('click', playnote)
);

const keyNoteDown = event =>
{
    const key= event.key;
    console.log(key);
    const button= document.querySelector(`button[data-key="${key}"]`)
    if (button) button.click();
} 

document.addEventListener('keydown', keyNoteDown);
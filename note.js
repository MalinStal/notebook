const ADD_BTN = document.querySelector(".add-btn");
const NOTE_CONTAINER = document.querySelector(".note-container");

showNotes()

ADD_BTN.addEventListener("click", e => {

    let paragraf = document.createElement("p");
    NOTE_CONTAINER.append(paragraf);
    paragraf.classList.add("note-box")
    paragraf.setAttribute("contenteditable", "true");

    let Image = document.createElement("img");
    paragraf.append(Image)
    Image.src ="soptunna.avif"
    

})

NOTE_CONTAINER.addEventListener("click", e => {
    if(e.target.tagName === "IMG") {
        e.target.parentElement.remove()
        updateStorage() 
    } else if(e.target.tagName === "P") {
       notes = document.querySelectorAll(".note-box");
       notes.forEach(note => {
        note.onkeyup = function() {
            updateStorage() 
        }
       })
    }
})


function updateStorage() {
    localStorage.setItem("notes", NOTE_CONTAINER.innerHTML)//vad det än är som är sparat i NOTES_CONTAINER. innerHTML kommer att sparas i lokalStorage hos klienten i namnet notes.

}
function showNotes() {
    NOTE_CONTAINER.innerHTML = localStorage.getItem("notes"); // uppdaterar sidan varje gång du refereshar så alla notes i localStorage vissas på sidan 
}
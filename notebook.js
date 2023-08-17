const FORM = document.getElementById("form");
const NOTELIST = document.getElementById("my-ul");
const INPUT = document.getElementById("input-title");
const TEXT_AREA = document.getElementById("text-area");
 
const pTag = document.querySelectorAll("paragraf-note");
const openModal = document.getElementsByClassName(".li");
let overlay = document.querySelector(".overlay");
const PARAGRAFNOTE = document.querySelectorAll(".note");

const notes = [];

//event for submiting form and adding the new note in the list 
FORM.addEventListener("submit", e => {
   e.preventDefault();
   addNewNote(INPUT.value, TEXT_AREA.value)

   INPUT.value = "";
   TEXT_AREA.value = "";

})

openModal.addEventListener("click", () => {
   openModal.classList.add('open-modal');
   pTag.style.display = "block";
})

  /*  
  denna loop är ifall du ska gå igenom flera element med samma class namn. 
  OBS! fungerade inte som planerat
  openModal.forEach(note => {
  note.addEventListener("click", () => { 
      openModal.forEach((element) => {
         element.classList.replace('li-modal','open-modal');
        
         });
         
   
     overlay.style.display= "block"; 
     //denna pTag funkar inte  
     pTag.style= "white-space: wrap; text-overflow: inherit;"

   })
   
});
*/





// fuction to creat a modal 

//function creat a new note whit timestamp
function addNewNote(title, note) {

   let newNote = {
      title: title,
      note: note,
   }
notes.push(newNote)

   let li = document.createElement("li");
   NOTELIST.append(li);
   li.classList.add("li", "li-modal")


   let titleH3 = document.createElement("h3")
   li.appendChild(titleH3);
   titleH3.innerHTML = newNote.title;
   titleH3.classList.add("note-header")

   let noteParagraf = document.createElement("p")
   li.appendChild(noteParagraf);
   noteParagraf.classList.add("paragraf-note");
   noteParagraf.innerText = newNote.note;

   let timeStamp = document.createElement("span")
   li.appendChild(timeStamp)
   timeStamp.classList.add("time_stamp")
   timeStamp.innerHTML = getTime()

 
console.log(notes)
}
// function to set the curent time and date
function getTime() {
   const NOW = new Date()
   let day = NOW.getDate().toString().padStart(2, "0");
   let month = NOW.getMonth() + 1;
   let month2 = month.toString().padStart(2, "0");
   let year = NOW.getFullYear()

   let currentYear = ` Date: ${day} - ${month2} - ${year} `;

   let currentTime = `Time: ${NOW.getHours()}:${NOW.getMinutes().toString().padStart(2, "0")}`

   return currentYear + currentTime
}

console.log(getTime())
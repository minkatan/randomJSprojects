const addBtn = document.querySelector(".add");

const notes = JSON.parse(localStorage.getItem("listNotes"));

if(notes) {
    notes.forEach(note => {
        addNewNote(note);
    });
}

addBtn.addEventListener("click", () => {
    addNewNote();
});

function addNewNote(textNotes = "") {
    const note = document.createElement("div");
    note.classList.add("notes")

    note.innerHTML = 
    `
    <div class="tools">
     <button class="edit">
         <i class="material-icons">edit_note</i>
     </button>
     <button class="delete">
         <i class="material-icons">delete</i>
     </button> 
 </div>
 <div class="main"></div>
     <textarea class="hidden"></textarea>
`;

    const editBtn = note.querySelector(".edit");
    const deleteBtn = note.querySelector(".delete");

    const main = note.querySelector(".main");
    const text = note.querySelector("textarea");

    text.value = textNotes;
    main.innerHTML = marked.parse(textNotes);

    editBtn.addEventListener("click",() => {
        main.classList.toggle("hidden");
        text.classList.toggle("hidden");
    });

    deleteBtn.addEventListener("click", () => {
        note.remove();

        updateLS();
    })

    text.addEventListener("input", (e) => {
        const {value} = e.target;
        
        main.innerHTML = marked.parse(value)

        updateLS();
    });
    document.body.appendChild(note);
};

function updateLS(){
    const allNotes = document.querySelectorAll("textarea");

    const listNotes = [];

    allNotes.forEach(note => {
        listNotes.push(note.value);
    });

    localStorage.setItem("listNotes" , JSON.stringify(listNotes));
};



// <div class="notes">
// <div class="tools">
//     <button class="edit">
//         <i class="material-icons">edit_note</i>
//     </button>
//     <button class="delete">
//         <i class="material-icons">delete</i>
//     </button> 
// </div>
// <div class="main hidden"></div>
//     <textarea></textarea>
// </div>
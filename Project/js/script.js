document.addEventListener("DOMContentLoaded", function () {

    const addNoteBtn = document.getElementById("addnewNote");
    const logoutBtn = document.getElementById("logoutBtn");
    const notesGrid = document.querySelector(".notes-grid");

    const modal = document.getElementById("noteModal");
    const saveNoteBtn = document.getElementById("saveNote");
    const closeModalBtn = document.getElementById("closeModal");
    const noteTitle = document.getElementById("noteTitle");
    const noteContent = document.getElementById("noteContent");

    let editingNoteId = null;

    const curUser = JSON.parse(localStorage.getItem("loggedUser"));
    if (!curUser || !curUser.username) {
        window.location.href = "./login.html";
        return;
    }

    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    renderNotes();

    addNoteBtn.addEventListener("click", function () {
        editingNoteId = null;
        clearInputs();
        modal.style.display = "flex";
    });

    closeModalBtn.addEventListener("click", function () {
        modal.style.display = "none";
        clearInputs();
    });

    saveNoteBtn.addEventListener("click", function () {
        if (!noteTitle.value || !noteContent.value) return;

        if (editingNoteId) {
            const note = notes.find(n => n.id === editingNoteId);
            note.title = noteTitle.value;
            note.content = noteContent.value;
        } else {
            notes.push({
                id: Date.now(),
                title: noteTitle.value,
                content: noteContent.value,
                date: new Date().toLocaleDateString(),
                username: curUser.username
            });
        }

        localStorage.setItem("notes", JSON.stringify(notes));
        modal.style.display = "none";
        clearInputs();
        renderNotes();
    });

    logoutBtn.addEventListener("click", function () {
        localStorage.removeItem("loggedUser");
        window.location.href = "./login.html";
    });

    function renderNotes() {
        notesGrid.innerHTML = "";

        const userNotes = notes.filter(
            note => note.username === curUser.username
        );

        if (userNotes.length === 0) {
            notesGrid.innerHTML = "<p>No notes yet.</p>";
            return;
        }

        userNotes.forEach(note => {
            const noteDiv = document.createElement("div");
            noteDiv.className = "note";

            noteDiv.innerHTML = `
                <h4>${note.title}</h4>
                <p>${note.content}</p>
                <small>${note.date}</small>
                <div class="note-actions">
                    <button class="edit">Edit</button>
                    <button class="delete">Delete</button>
                </div>
            `;

            noteDiv.querySelector(".edit").addEventListener("click", () => {
                editingNoteId = note.id;
                noteTitle.value = note.title;
                noteContent.value = note.content;
                modal.style.display = "flex";
            });

            noteDiv.querySelector(".delete").addEventListener("click", () => {
                notes = notes.filter(n => n.id !== note.id);
                localStorage.setItem("notes", JSON.stringify(notes));
                renderNotes();
            });

            notesGrid.appendChild(noteDiv);
        });
    }

    function clearInputs() {
        noteTitle.value = "";
        noteContent.value = "";
    }
});

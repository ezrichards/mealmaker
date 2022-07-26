let newModal = new bootstrap.Modal(document.getElementById('newModal'), {});
let editModal = new bootstrap.Modal(document.getElementById('editModal'), {});

document.getElementById('openNewModal').onclick = function() {
    newModal.show();
}

document.getElementById('closeNewModal').onclick = function() {
    newModal.hide();
}

document.getElementById('closeEditModal').onclick = function() {
    editModal.hide();
}

handleEdit = function(id) {
    document.getElementById("editForm").action = "/recipes/" + id + "/edit?_method=PUT";

    // TODO recipe autofill, getrecipebyid
    document.getElementById("editTitle").value = "";
    document.getElementById("editDescription").value = "";
    document.getElementById("editUrl").value = "";
    document.getElementById("editNotes").value = "";
    document.getElementById("editIngredients").value = "";
    editModal.show();
}

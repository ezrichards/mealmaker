let editModal = new bootstrap.Modal(document.getElementById('editModal'), {});

handleEdit = function(id) {
    document.getElementById("editForm").action = "/recipes/" + id + "/edit?_method=PUT";

    // TODO recipe autofill, getrecipebyid
    document.getElementById("editTitle").value = "";
    document.getElementById("editDescription").value = "";
    document.getElementById("editUrl").value = "";
    document.getElementById("editIngredients").value = "";
    editModal.show();
}

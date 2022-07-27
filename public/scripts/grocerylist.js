let newItemModal = new bootstrap.Modal(document.getElementById('newItemModal'), {});

document.getElementById('openNewItemModal').onclick = function() {
    newItemModal.show();
}

document.getElementById('closeNewItemModal').onclick = function() {
    newItemModal.hide();
}

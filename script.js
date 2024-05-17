//your JS code here. If required.
function removeColor() {
    const selectElement = document.getElementById('colorSelect');
    const selectedIndex = selectElement.selectedIndex;

    if (selectedIndex !== -1) {
        selectElement.remove(selectedIndex);
    }
}
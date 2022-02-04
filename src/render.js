function render(item) {
    if (item.firstChild) {
        item.firstChild.remove();
    }
}

export default render

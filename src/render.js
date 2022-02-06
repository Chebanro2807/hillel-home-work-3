function render(item) {
    item.firstChild ? item.firstChild.remove() : {}
}

export default render

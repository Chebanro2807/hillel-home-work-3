function addPicture(src, item) {
    let img = document.createElement("img");
    img.src = src;
    item.append(img)
}

export default addPicture

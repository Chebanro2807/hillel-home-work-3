function addPicture(...args) {
    let img = document.createElement("img");
    img.src = args[0];
    args[1].append(img)
}

export default addPicture

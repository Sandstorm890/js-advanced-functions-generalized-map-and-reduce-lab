function map(arr, funct) {
    let newArray = []
    for (let e of arr) {
        if (funct) {
            newArray.push(funct(e))
        } else { newArray.push(e) }
    }
    return newArray
};

function reduce(arr, funct, value=0) {
    let x = value
    for (let e of arr) {x += funct(e)}
    return x
};
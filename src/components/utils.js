export function pathToData (path, vm) {
    let value = vm
    path.split('.').forEach(key => {
        value = value[key]
    })
    return value
}

export function setVal(data, path, vm) {
    let value = vm
    path.split('.').forEach((key, index) => {
        if (path.split('.').length - 1 === index) {
            value[key] = data
        } else {
            value = value[key]
        }
    })
}
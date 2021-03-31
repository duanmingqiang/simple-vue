
import Dep from './dep.js'
function defineReactive(data, key, value = data[key]) {
    // console.log(`key:${key}  value:${value}`)
    let dep = new Dep()
    observe(value)
    Object.defineProperty(data, key, {
        enumerable: true,
        get() {
            if (Dep.target) {
                dep.addSub(Dep.target)
            }
            return value
        },
        set(newVal) {
            if (value === newVal) {
                return
            }
            value = newVal
            dep.notify()
        }
    })
}

function observe(data) {
    if (data && typeof data !== 'object') {
        return
    }
    new Observe(data)
}

function Observe(data) {
    Object.keys(data).forEach(key => {
        defineReactive(data, key)
    })
}

export default observe
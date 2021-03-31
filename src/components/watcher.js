import Dep from './dep.js'
import {
    pathToData
} from './utils'
class Watcher {
    constructor(vm, exp, cb) {
        this.vm = vm
        this.exp = exp
        this.cb = cb
        Dep.target = this
        this.update()
        Dep.target = null
    }
    update() {
        let value = pathToData(this.exp, this.vm)
        this.cb(value)
    }
}

export default Watcher
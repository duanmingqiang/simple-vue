import observe from './observe'
import {
    proxydata
} from './proxydata.js'

import Compile from './compile.js'
class Vue{
    constructor(options) {
        this.$options = options
        this.$data = options.data
        this.init()
    }
    init() {
        observe(this.$data)
        proxydata(this.$options, this)
        new Compile(this.$options.el, this)
    }
}

export default Vue
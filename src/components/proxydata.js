
export function proxydata(options, vm) {
    {
        // data挂载到实例
        let data = options.data
        Object.keys(data).forEach(key => {
            Object.defineProperty(vm, key, {
                get() {
                    return data[key]
                },
                set(newVal) {
                    data[key] = newVal
                }
            })
        })
    }

    {
        // computed挂载到实例
        let data = options.computed
        Object.keys(data).forEach(key => {
            Object.defineProperty(vm, key, {
                get: typeof data[key] !== 'function'? data[key].get: data[key],
                set(newVal) {
                }
            })
        })
    }

    {
        // method挂载到实例
        let data = options.methods
        Object.keys(data).forEach(key => {
            vm[key] = data[key]
        })
    }

}

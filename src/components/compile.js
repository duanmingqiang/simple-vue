import Watcher from './watcher.js'
class Compile{
    constructor(el, vm) {
        this.vm = vm
        this.el = document.querySelector(el)
        this.fragment = document.createDocumentFragment()
        let child;
        while(child = this.el.firstChild) {
            this.fragment.appendChild(child)
        }
        this.compile(this.fragment)
        this.el.append(this.fragment)
    }
    compile(child) {
        Array.from(child.childNodes).forEach(node => {
            // console.log(node)
            // this.(node)
            if (node.nodeType === 3) {
                let reg = /\{\{(.*)\}\}/
                let text = node.textContent
                let aaa = text.match(reg)
                if (aaa) {
                    let exp = Array.from(aaa)[1]
                    new Watcher(this.vm, exp, function (newVal) {
                        node.textContent = text.replace(reg, newVal)
                    })
                }
                
            }
            if (node.nodeType === 1) {
                console.log(111, node.attributes)
                node.attributes && Array.from(node.attributes).forEach(attr => {
                    console.log(111)
                    if (attr.name.indexOf('v-on') > -1) {
                        let eventType = attr.name.slice(attr.name.indexOf(':') + 1)
                        if (eventType === 'click') {
                            node.addEventListener('click', e => {
                                
                                this.vm[attr.value](e)
                            })
                        }
                    }
                })
            }
            // 后代元素继续递归处理
            if (node.childNodes && node.childNodes.length) {
                this.compile(node)
            }
        })
    }

}

export default Compile
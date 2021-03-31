// import './style.css'

// document.querySelector('#app').innerHTML = `
//   <h1>Hello Vite!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `

import Vue from './components/vue'

window.vm = new Vue({
    el: '#app',
    data: {
        name: 'laoxiaozi',
        person: {
            age: 28
        }
    },
    computed: {
        computedData() {
            return this.name + this.person.age
        }
    },
    methods: {
        add() {
            this.person.age++
        }
    }
})
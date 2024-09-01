// import './assets/main.css'

// import { createApp} from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')

import { createApp, h } from 'vue'

createApp({
    data() {
        return {
            message: 'Hello, Vue!',
        };
    },
    methods: {
        reverse() {
            this.message = this.message.split('').reverse().join('');
        },
    },
    render() { // data와 methods에 정의한 속성 사용
        return h('div', [
            h('p', this.message),
            h('button', { onClick: this.reverse }, 'Reverse'),
        ]);
    },
}).mount('#app');
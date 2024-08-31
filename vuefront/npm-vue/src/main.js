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
    render() {
        return h('div', [
            h('p', this.message),
            h('button', { onClick: this.reverse }, 'Reverse'),
        ]);
    },
}).mount('#app');
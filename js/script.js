const {createApp} = Vue;

createApp({
    data(){
        return {
            title: 'Hello Vue!',
            color: '',
            image: '../img/vuejs.png'
        }
    },
    methods: {
        changeColor(){
            this.color = 'green fonts-6'
        }
    }
}).mount('#app');
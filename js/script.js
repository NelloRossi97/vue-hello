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
        changeColor(value){
            this.color = value;
            console.log(value);
        }
        
    }
}).mount('#app');


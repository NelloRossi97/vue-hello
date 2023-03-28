const {createApp} = Vue;

createApp({
    data(){
        return {
            title: 'prova',
            color: '',
            fontsize: '',
            image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.factweavers.com%2Fblog%2Fintroduction-to-vuejs%2F&psig=AOvVaw3GG2a6kLtZb8MyFrnRef1m&ust=1680088389574000&source=images&cd=vfe&ved=2ahUKEwjC-72Ov_79AhUGYPEDHVTHDYoQjRx6BAgAEAo'
        }
    }
}).mount('#app');
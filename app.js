const app = Vue.createApp({
    data (){
        return {
            raumname:"Raum1",
            status: "frei"

        }
    },
    methods: {
        showRoom(){
            console.log('You clicked me')

        },
        bookRoom(){
            this.status = "belegt"
        },
        deleteBooking(){
            this.status = "frei"
        }
    }
})

app.mount('#app')
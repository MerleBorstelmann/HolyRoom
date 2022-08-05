
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
            if (this.status === "frei"){
                this.status = "belegt"
            }
            else console.log('Der Raum ist bereits belegt')

        },
        changeBooking(){

        },
        deleteBooking(){
            this.status = "frei"
        }
    }
})

app.mount('#app')
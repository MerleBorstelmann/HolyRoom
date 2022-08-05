
const app = Vue.createApp({
    data (){
        return {
            rooms: [
                {roomName: "großer Saal", numberOfSeats: 50, furnishings: "Flügel" },
                {roomName: "kleiner Saal", numberOfSeats: 25, furnishings: "Beamer" },
                {roomName: "Gruppenraum 1", numberOfSeats: 20, furnishings: "Musikanlage" },
                {roomName: "Gruppenraum 2", numberOfSeats: 10, furnishings: "Sofas" },
                {roomName: "Gruppenraum 3", numberOfSeats: 15, furnishings: "Musikanlage" },
                {roomName: "Gruppenraum 4", numberOfSeats: 5, furnishings: "Sofas" }


            ]

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
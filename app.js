
const app = Vue.createApp({
    data (){

        return {
            test: 'hallo',
            rooms: [
                {roomName: "großer Saal", numberOfSeats: 50, furnishings: "Flügel", occupancy: frei},
                {roomName: "kleiner Saal", numberOfSeats: 25, furnishings: "Beamer", occupancy: frei},
                {roomName: "Gruppenraum 1", numberOfSeats: 20, furnishings: "Musikanlage", occupancy: frei},
                {roomName: "Gruppenraum 2", numberOfSeats: 10, furnishings: "Sofas", occupancy: frei},
                {roomName: "Gruppenraum 3", numberOfSeats: 15, furnishings: "Musikanlage", occupancy: frei},
                {roomName: "Gruppenraum 4", numberOfSeats: 5, furnishings: "Sofas", occupancy: frei},
                {roomName: "Gruppenraum 5", numberOfSeats: 20, furnishings: "Beamer", occupancy: frei},
                {roomName: "Gruppenraum 6", numberOfSeats: 15, furnishings: "Musikanlage", occupancy: frei},
                {roomName: "Chill-Area", numberOfSeats: 10, furnishings: "Sitzsäcke", occupancy: frei},
                {roomName: "Küche", numberOfSeats: 0, furnishings: "Küche", occupancy: frei}
            ]

        }
    },
    methods: {
        showRoom(){


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
import { EventEmitter } from "events"

const em = new EventEmitter();
const eventName = "testEvent";

em.on(eventName, obj => {
    console.log("event.js: " + obj)
})

export default em
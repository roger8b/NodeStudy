import {EventEmitter} from "events"
import ev from "./events.js"

const eventEmitter = new EventEmitter();

const eventName = "testEvent";

eventEmitter.on(eventName, obj => {
    console.log(obj)
})

eventEmitter.emit(eventName,"abc")
ev.emit(eventName, "xpto")
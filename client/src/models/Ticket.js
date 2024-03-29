import { TowerEvent } from "./TowerEvent.js"

export class Ticket{
    constructor(data){
        this.ticketId = data.id || data._id
        this.eventId = data.eventId
        this.accountId = data.accountId
        this.profile = data.profile
        this.event = data.event ? new TowerEvent(data.event) : null
    }
}
import { Schema } from "mongoose"

export const TowerEventSchema = new Schema({
    creatorId: { type: Schema.ObjectId, ref: 'Account', required: true },
    name: { type: String, minLength: 3, maxLength: 50, required: true },
    description: { type: String, minLength: 15, maxLength: 1000, required: true },
    coverImg: { type: String, minLength: 3, maxLength: 1000, required: true },
    location: { type: String, minLength: 1, maxLength: 500, required: true },
    capacity: { type: Number, min: 1, max: 5000, required: true },
    startDate: { type: Date, required: true },
    isCanceled: { type: Boolean, default: false },
    type: { type: String, enum: ['concert', 'convention', 'sport', 'digital'] }
},
    { timestamps: true, toJSON: { virtuals: true } })

TowerEventSchema.virtual('creator', {
    localField: 'creatorId',
    ref: 'Account',
    foreignField: '_id',
    justOne: true
})
TowerEventSchema.virtual('ticketCount', {
    localField: '_id',
    ref: 'Ticket',
    foreignField: 'eventId',
    count: true
})
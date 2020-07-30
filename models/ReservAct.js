const userSchema = new Schema ({
    name: String,
    img: { type: String, default: '#' },
    type: { type: String, enum: ['tennis', 'football', 'swimming'] },
    schedule: Number,
    horario: Date, 
    instructor:  { type: Schema.Types.ObjectId, ref: 'User' }
});
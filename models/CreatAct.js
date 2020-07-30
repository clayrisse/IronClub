const userSchema = new Schema ({
    title: String,
    img: { type: String, default: '#' },
    description: String,
    sport: { type: String, enum: ['tennis', 'football', 'swimming'] },
    participants: Number,
    date: Date, 
    instructor:  { type: Schema.Types.ObjectId, ref: 'User' },
    asisted: { type: Boolean, default: false },
    coments: String,
    rating: { type: Number, min: 1, max: 5 }
    //reserv: { type: Schema.Types.ObjectId, ref: 'reservCat' }
});